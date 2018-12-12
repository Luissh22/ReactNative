import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    // Class level property
    state = { albums: [] }; // set to empty array

    // Executes as soon as component is about to be rendered to screen
    componentWillMount() {
        // Perfect for loading data
        const url = 'https://rallycoding.herokuapp.com/api/music_albums';
        axios.get(url)
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums
            .map(album => <AlbumDetail album={album} key={album.url} />);
    }

    render() {
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

export default AlbumList;
