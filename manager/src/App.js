// @flow
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from "./components/common";

type Props = {};

class App extends React.Component<Props> {

    
    componentWillMount(): void {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyA4w_c8sWcsXCZ00qMWmPU-TXsHmdyKM28',
            authDomain: 'reactnativemanager-c0764.firebaseapp.com',
            databaseURL: 'https://reactnativemanager-c0764.firebaseio.com',
            projectId: 'reactnativemanager-c0764',
            storageBucket: 'reactnativemanager-c0764.appspot.com',
            messagingSenderId: '204472921913'
        };

        firebase.initializeApp(config);
    }
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
           <Provider store={store}>
               <View>
                   <Header headerText='Manager'/>
                   <LoginForm>
                   </LoginForm>
               </View>
           </Provider>
        );
    }
}

export default App;