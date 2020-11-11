import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
    render() {
        const { song } = this.props.data;
        const { id } = this.props.params;
        if (!song) {
            return <div></div>
        }
        return (
            <div>
                <Link to = "/"> Back </Link>
                <h3>
                    {song.title}
                    < LyricCreate songId = {id} />
                    <LyricList 
                        lyrics = {song.lyrics}
                        songId = {id} 
                    />
                </h3>
            </div>
        )
    }
}

export default graphql (fetchSong, {
    options: props => {
        return { variables: { id: props.params.id } }
    }
})(SongDetail);