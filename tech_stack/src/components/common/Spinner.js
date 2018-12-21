import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1, // Take full width
        justifyContent: 'center', // Center
        alignItems: 'center'
    }
});

export { Spinner };