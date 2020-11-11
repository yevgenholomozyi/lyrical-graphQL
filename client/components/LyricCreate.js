import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../mutations/AddLyricsToSong';

class LyricCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { content: '' };
    }
    onSubmit (event, id) {
        event.preventDefault();
        this.props.mutate({ 
            variables: { 
                content: this.state.content, 
                songId: this.props.songId
            } 
        })
        .finally(() =>this.setState({ content: '' }));


    }

    render () {
        return (
            <form onSubmit = {this.onSubmit.bind(this)}>
                <label htmlFor="">Lyric</label>
                <input 
                    type = "text" 
                    name = "" 
                    id = ""
                    value = {this.state.content}
                    onChange = {event => this.setState({content: event.target.value})}
                />
            </form>  
        )
    }
}

export default graphql (mutation) (LyricCreate);