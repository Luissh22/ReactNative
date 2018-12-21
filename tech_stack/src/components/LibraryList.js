import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends React.Component {

    // Will be called on every item to be shown on the screen
    // Create components here
    renderItem (library) {
        return <ListItem library={library} />
    }

    render() {
        return (
            <FlatList
                renderItem={({ item }) => this.renderItem(item)}
                data={this.props.libraries}
                keyExtractor={(library) => library.id.toString()} // How to generate keys for list
            />
        );
    }
}

// Will take state attributes and map them to props in our component
const mapStateToProps = state => {
    // any object returned from here will show up as a prop
    return {
        libraries: state.libraries
    };
};

// connect() returns a function
// so we're calling the function returned by connect with LibraryList
// connect helps us get access to state inside a given component
// Connect gets state from Provider and filters state through mapStateToProps
export default connect(mapStateToProps)(LibraryList);