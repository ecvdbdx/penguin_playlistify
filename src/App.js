import React from 'react';
import './App.css';
import ButtonLogin from './components/ButtonLogin.jsx'
import Playlists from './components/Playlists.jsx';

class app extends React.Component {
  constructor() {
      super();
    
      this.getToken();

  }

  getToken(){
    const url = window.location.href;
    if(window.location.href.includes('access_token=')){
    const params = url.split('access_token=')
    var token  = params[1].split("&")
    
    // this.setState({ userToken: token[0] })
    // this.setState({isConnected :true})
    sessionStorage.setItem('userToken', token[0])
  }
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
    <Playlists />
    // <p>Bitch</p>s
  )
}
}
}

  


export default app;

