// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from "./common";
import {EMPLOYEE_CREATE} from "../navigation/Screens";
import type {NavigationProps} from "../types";

type Props = { } & NavigationProps;

export default class EmployeeList extends React.Component<Props> {
    static navigationOptions = ({ navigation }: NavigationProps) => {
        const { addButtonStyles }: {[string]: string}  = styles;
        return {
            headerTitle: 'Employee List',
            headerLeft: null,
            headerRight: (
                <Button
                    style={addButtonStyles}
                    onPress={() => navigation.navigate(EMPLOYEE_CREATE)}
                >
                    Add
                </Button>
            )
        };

    };

    render() {
        return (
            <View>
                <Text>Employee 1</Text>
                <Text>Employee 2</Text>
                <Text>Employee 3</Text>
                <Text>Employee 4</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addButtonStyles: {
        borderWidth: 0,
        backgroundColor: 'transparent'
    }
});