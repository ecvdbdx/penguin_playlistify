import React from 'react';


export default class AddPlaylistPage extends React.Component {
    constructor() {
        super();
       this.creatPlaylist = this.creatPlaylist.bind(this);
       this.state ={
           PlaylistName :"",
       }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({PlaylistName: event.target.value});
    }

    creatPlaylist(NewPlaylistName) {

        const sessionToken = sessionStorage.getItem('userToken');
        let myHeaders = new Headers();
        let myBody ={
            name: NewPlaylistName,
            public:false
        };
        myHeaders.append('Authorization', 'Bearer ' + sessionToken);
        myHeaders.append('Content-Type', 'application/json');


        var myInit = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(myBody),
            mode: 'cors',
            cache: 'default'
        };
        const userId = sessionStorage.getItem('userId');

        fetch('https://api.spotify.com/v1/users/'+userId+'/playlists', myInit)
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
        return (
          <div className='Playlists'>
              <input type="text" value={this.state.PlaylistName} onChange={this.handleChange}/>
              <button onClick={() => this.creatPlaylist(this.state.PlaylistName)}>créer la playlist</button>
          </div>
        )
    }
}

