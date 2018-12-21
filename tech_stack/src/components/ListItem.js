import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends React.Component {
    render() {
        const { title, description } = this.props.library;
        const { titleStyles } = styles;

        return (
            <CardSection>
                <Text style={titleStyles}>
                    { title }
                </Text>
            </CardSection>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedLibraryId: state.selectedLibraryId
    }
};

const styles = StyleSheet.create({
    titleStyles: {
        fontSize: 18,
        paddingLeft: 15
    }
});
// second arg is to bind arg creator
export default connect(mapStateToProps, actions)(ListItem);