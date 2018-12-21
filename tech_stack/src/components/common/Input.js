import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Input = ({ value, label, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, containerStyle, labelStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        height: 20,
        width: 100
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
});

export { Input };