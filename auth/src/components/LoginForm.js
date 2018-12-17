import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    state = {
        emailText: '',
        passwordText: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { emailText, passwordText } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(emailText, passwordText)
            .then(this.onLoginSuccess.bind(this)) // Signed in successfully
            .catch(() => {
                // If request fails
                // Create a user with this emailText & password
                firebase.auth().createUserWithEmailAndPassword(emailText, passwordText)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailure.bind(this));
        });
    }

    onLoginSuccess() {
        this.setState({ emailText: '', passwordText: '', error: '', loading: false  });
    }

    onLoginFailure() {
        this.setState({ error: 'Authentication failed.', loading: false });
    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Spinner size={'small'}/>;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    renderErrorText() {
        if (this.state.error !== '') {
            return (
                <Text style={styles.errorTextStyle}>
                    { this.state.error }
                </Text>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.emailText}
                        label='Email'
                        placeholder='user@mail.com'
                        onChangeText={(emailText) => this.setState({ emailText })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        value={this.state.passwordText}
                        label='Password'
                        placeholder='password'
                        onChangeText={(passwordText) => this.setState({ passwordText })}
                        secureTextEntry
                    />
                </CardSection>
                { this.renderErrorText() }
                <CardSection>
                    {this.renderButtonOrSpinner()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
});

export default LoginForm;
