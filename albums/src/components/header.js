import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyles, safeAreaStyles } = styles;

    return (
        <SafeAreaView style={safeAreaStyles}>
            <View style={viewStyles}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = {
    viewStyles: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      position: 'relative'
    },
    safeAreaStyles: {
        backgroundColor: '#F8F8F8',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
    },
    textStyle: {
      fontSize: 24,
    }
};

export default Header;
