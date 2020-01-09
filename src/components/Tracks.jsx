import React from 'react';
import Track from './Track.jsx';


export default class Tracks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        }
    }
    componentDidMount() {

        const sessionToken = sessionStorage.getItem('userToken');
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + sessionToken);
    
        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };
    
        console.log("https://api.spotify.com/v1/playlists/" + this.props.playlistId + "/tracks/");

        fetch('https://api.spotify.com/v1/playlists/' + this.props.playlistId + '/tracks/', myInit)
            .then(function (response) {
                console.log('resp', response)
                return response.json();
            })
            .then(data => {
                console.log('data', data);
                this.setState({ tracks: data });


            })

    }
    render() {
        if (this.state.tracks.length === 0) {
            return <p>A winner is you</p>
        } else {
            const mesComp = this.state.tracks['items'].map((track, key) =>
                <Track key={key} name={track['track'].name} imageTrack={track['track']['album']['images'][2].url} />
            )

            return (
                <div className='tracks'>{mesComp}</div>
            )
        }
    }
}
