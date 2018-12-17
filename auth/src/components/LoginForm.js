import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = {
        emailText: '',
        passwordText: ''
    };

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
                <CardSection>
                    <Button>
                       Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
