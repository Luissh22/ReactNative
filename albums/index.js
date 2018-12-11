import React from 'react';
// Import destructuring
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create component
const App = () => (
    <Header />
);


// Render it to the screen
// () => Obj has an implicit return statement
AppRegistry.registerComponent('albums', () => App);
