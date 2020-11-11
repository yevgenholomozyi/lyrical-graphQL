import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';
import mutation from '../mutations/DeleteSong';
class SongList extends Component {
   /*  constructor(props) {
        super();
        this.onSongDelete = this.onSongDelete.bind(this);
    }  */

    onSongDelete(id) {
        this.props.mutate({ variables: { id } })
            .then(() => this.props.data.refetch());
    }

    renderSongs() {
        return this.props.data.songs.map(({ id, title }) => {
            return (
                
                <li 
                className = "collection-item"
                key = {id}>
                    <Link to = {`song/${id}`}>
                        {title}
                    </Link>
                        <i 
                            className="material-icons"
                            onClick = {() => this.onSongDelete(id)}
                        >
                            delete
                        </i>
                </li>
            );
        });
    }
    render() {
        if (this.props.data.loading) {
            return (
                <div>...Loading</div>
            )
        }
        return (
            <div>
                <ul className = "collection">
                    {this.renderSongs()}
                </ul>
                <Link 
                    to = "/song/new"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

export default graphql(mutation)(
    graphql(query)(SongList)
);