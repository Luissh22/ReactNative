// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import firebase from 'firebase';
import reducers from './reducers';

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
        return (
           <Provider store={createStore(reducers)}>
               <View>
                   <Text>
                       Hello, World!
                   </Text>
               </View>
           </Provider>
        );
    }
}

export default App;