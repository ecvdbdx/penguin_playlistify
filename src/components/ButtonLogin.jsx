import React from 'react';

export default function ButtonLog() {
function getLoginURL() {
    var url = 'https://accounts.spotify.com/authorize?client_id=' + "815fd421ad11427086bb3eac8c0b194a" +
     '&redirect_uri=' + encodeURIComponent('https://692029be.ngrok.io')
     +'&response_type=token&scope=user-read-private%20playlist-read-private%20playlist-modify-private';
     window.open(url, "_self");
  }
    
      
    return (
        <button onClick={getLoginURL} >Se connecter</button>
    )
}
