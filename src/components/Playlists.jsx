import React from 'react';
import Playlist from './Playlist.jsx';


export default class Playlists extends React.Component {
    constructor() {
        super();

        this.state = {
            playlists: []
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
    

        fetch('https://api.spotify.com/v1/me/playlists', myInit)
            .then(function (response) {
                console.log('resp', response)
                return response.json();
            })
            .then(data => {
                console.log('data', data);
                this.setState({ playlists: data });


            })

    }
    render() {
        if (this.state.playlists.length === 0) {
            return <p>A winner is you</p>
        } else {
            const mesComp = this.state.playlists['items'].map((playlist, key) =>
                <Playlist key={key} name={playlist.name} image={playlist.images} alt={playlist.description} />
            )

            return (
                <div className='Playlists'>{mesComp}</div>
            )
        }
    }
}
