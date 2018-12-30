// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Text, Picker, StyleSheet } from 'react-native';
import {Button, Card, CardSection, Input} from "./common";
import { employeeFormUpdate } from "../actions";
import type {FormUpdate} from "../actions";
import { Action } from "../types";
import type {State} from "./types";
import type {EmployeeState} from "../types";

type EmployeeProps = {
    name: string,
    phone: string,
    shift: string,
};

type Props = {
    employeeFormUpdate: ({prop: string, value: string}) => Action<FormUpdate>
} & EmployeeProps;

const daysOfWeek: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

class EmployeeCreate extends React.Component<Props, State> {
    static navigationOptions = {
        headerTitle: 'Create Employee',
    };

    onFormUpdate(prop: string, value: string) {
        this.props.employeeFormUpdate({prop, value});
    }

    renderPickerItem(dayOfWeek: string) {
        return (
            <Picker.Item key={dayOfWeek} label={dayOfWeek} value={dayOfWeek}/>
        );
    }

    renderPicker() {
        return (
            <Picker
                selectedValue={this.props.shift}
                onValueChange={day => this.onFormUpdate('shift', day)}
            >
                {daysOfWeek.map(daysOfWeek => this.renderPickerItem(daysOfWeek))}
            </Picker>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'Name'}
                        placeholder={'Michela'}
                        value={this.props.name}
                        onChangeText={text => this.onFormUpdate('name', text)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label={'Phone'}
                        placeholder={'555-555-5555'}
                        value={this.props.phone}
                        onChangeText={text => this.onFormUpdate('phone', text)}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>
                        Shift
                    </Text>
                    { this.renderPicker() }
                </CardSection>
                <CardSection>
                    <Button onPress={() =>{
                        console.log(this.props.name);
                        console.log(this.props.phone);
                        console.log(this.props.shift);
                    } }>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
});


const mapStateToProps = (state: State): EmployeeState => {
    const { name, phone, shift } = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeFormUpdate})(EmployeeCreate);