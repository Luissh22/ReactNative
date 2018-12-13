import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA-tWHG_TF2JHPSut6WQiGaGkGc-e4zTeg',
            authDomain: 'reactnativeauthenticatio-ebd81.firebaseapp.com',
            databaseURL: 'https://reactnativeauthenticatio-ebd81.firebaseio.com',
            projectId: 'reactnativeauthenticatio-ebd81',
            storageBucket: 'reactnativeauthenticatio-ebd81.appspot.com',
            messagingSenderId: '753431410700'
        });
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentication'}/>
                <LoginForm />
            </View>
        );
    }
}

export default App;
