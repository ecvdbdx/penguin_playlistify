import React from 'react';
import './App.css';
import ButtonLogin from './components/ButtonLogin.jsx';
import Playlists from './components/Playlists.jsx';
import AddPlaylist from './components/AddPlaylist.jsx';
import AddPlaylistPage from './components/AddPlaylistPage.jsx';

class app extends React.Component {
  constructor() {
    super();
    this.state = {
      displayAdd : false,
    }


  }

  AddPageDisplayState() {
    this.setState({displayAdd : !this.state.displayAdd})
  }


  getToken(){
    const url = window.location.href;
    if(window.location.href.includes('access_token=')){
      const params = url.split('access_token=')
      const token  = params[1].split("&")
      sessionStorage.setItem('userToken', token[0])
    }
  }
  componentDidMount () {
    this.getToken();
    const sessionToken = sessionStorage.getItem('userToken');
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + sessionToken);

    var myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    };

    fetch('https://api.spotify.com/v1/me', myInit)
      .then(function (response) {
        console.log('resp', response)
        return response.json();
      })
      .then(data => {
        sessionStorage.setItem('userId', data.id)
      })
  }

  render() {
    const sessionToken = sessionStorage.getItem('userToken');

    if(!sessionToken){
      return(
        <div className="App">
          <ButtonLogin/>
        </div>
      )
    } else{

      return (
        <div className="App">
          <AddPlaylist displayAdd={this.AddPageDisplayState.bind(this)}/>
          {this.state.displayAdd && <AddPlaylistPage/>}
          <Playlists />
        </div>
      )
    }
  }
}




export default app;

