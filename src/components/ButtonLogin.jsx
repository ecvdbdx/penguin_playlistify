import React from 'react';

export default function ButtonLog() {
function getLoginURL() {
    var url = 'https://accounts.spotify.com/authorize?client_id=' + "815fd421ad11427086bb3eac8c0b194a" +
     '&redirect_uri=' + encodeURIComponent('https://3a73d5ce.ngrok.io') 
     +'&response_type=token';
     window.open(url, "_self");
  }
    
      
    return (
        <button onClick={getLoginURL} >Se connecter</button>
    )
}