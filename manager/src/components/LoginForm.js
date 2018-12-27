// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardSection, Input } from './common';
import { emailChanged, passwordChanged, loginUser } from "../actions";
import type { Action, AuthState, UserCredentials } from "../types";

type Props = {
    emailChanged: (text: string) => Action,
    passwordChanged: (text: string) => Action,
    loginUser: (credentials: UserCredentials) => Action
} & AuthState;

type State = {
    auth: AuthState
}

class LoginForm extends React.Component<Props, State> {

    onEmailChange(text: string) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text: string) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({email, password});
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
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state: State): AuthState => {
    const { email, password } = state.auth;
    return {
        email: email,
        password: password
    };
};

// Second arg adds email changed to props list, and dispatches actions
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);

