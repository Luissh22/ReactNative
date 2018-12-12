import React from 'react';
// Import destructuring
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create component
// flex: 1 expands component to fill entire content area
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);


// Render it to the screen
// () => Obj has an implicit return statement
AppRegistry.registerComponent('albums', () => App);
