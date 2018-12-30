// @flow
import React from 'react';
import Navigator from './Navigator';
import NavigationService from "./NavigationService";

export default class AppNavigator extends React.Component<{ }> {
    render() {
        return (
            <Navigator
                ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
            />
        );
    }
}
