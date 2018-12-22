import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {
    
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    
    renderDescription() {
        const { library, expanded } = this.props;
        
        if (expanded) {
            return (
               <CardSection>
                   <Text style={{ paddingLeft: 5 }}>
                       {library.description}
                   </Text>
               </CardSection>
            );
        }
    }
    
    render() {
        const { title, id } = this.props.library;
        const { titleStyles } = styles;
        
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyles}>
                            { title }
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

// Second arg is props passed to wrapped component
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    
    return {
        expanded
    };
};

const styles = StyleSheet.create({
    titleStyles: {
        fontSize: 18,
        paddingLeft: 15
    }
});
// second arg is to bind action creator
// mutates action creator in a way such that when it's called,
// action is automatically dispatched to reducers
// also adds action to props of ListItem
export default connect(mapStateToProps, actions)(ListItem);
