// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from "../actions";
import type { AuthState, UserCredentials, NavigationProps } from "../types";
import { Action } from "../types";
import {EMPLOYEE_LIST} from "../navigation/Screens";
import { User } from "firebase";
import type { State } from './types';

type Props = {
    emailChanged: (text: string) => Action<string>,
    passwordChanged: (text: string) => Action<string>,
    loginUser: (credentials: UserCredentials) => Action<User>,
} & AuthState & NavigationProps;

class LoginForm extends React.Component<Props, State> {

    static navigationOptions = {
        headerTitle: 'Login',
    };

    onEmailChange(text: string) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text: string) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        //this.props.loginUser({email, password});
        this.props.navigation.navigate(EMPLOYEE_LIST);
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size={'large'}/>
            );
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'Email'}
                        placeholder={'user@mail.com'}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label={'Password'}
                        placeholder={'password'}
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

const mapStateToProps = (state: State): AuthState => {
    const { email, password, error, loading } = state.auth;
    return {
        email: email,
        password: password,
        error: error,
        loading: loading
    };
};

// Second arg adds email changed to props list, and dispatches actions
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);

