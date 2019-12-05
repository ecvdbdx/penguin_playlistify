import React from 'react';
import './App.css';
import ButtonLogin from './components/ButtonLogin.jsx'

class app extends React.Component {
  constructor() {
      super();

      this.state = {
        isConnected : false,
        userToken: null,
      } 
  }

  getToken(){
    const url = window.location.href;
    if(window.location.href.includes('access_token=')){
    const params = url.split('access_token=')
    var token  = params[1].split("&")
    
    this.setState({ userToken: token[0] })
    this.setState({isConnected :true})
  }
}
componentDidMount() {
  this.getToken();
}
render() {
  if(!this.state.isConnected){
  return(
  <div className="App">
  <ButtonLogin/>
  </div>
  )
} else{
  return(
    <div className="App">
    T'es déjà connecté
    </div>
    )
}
}
}

  


export default app;

