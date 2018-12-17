import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Button, CardSection, Header, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA-tWHG_TF2JHPSut6WQiGaGkGc-e4zTeg',
            authDomain: 'reactnativeauthenticatio-ebd81.firebaseapp.com',
            databaseURL: 'https://reactnativeauthenticatio-ebd81.firebaseio.com',
            projectId: 'reactnativeauthenticatio-ebd81',
            storageBucket: 'reactnativeauthenticatio-ebd81.appspot.com',
            messagingSenderId: '753431410700'
        });

        firebase.auth().onAuthStateChanged((user) => {
            // User will be populated if signed in (null otherwise)
            this.setState({ loggedIn: user != null });
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default: return <Spinner size={'large'}/>;
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText={'Authentication'}/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
