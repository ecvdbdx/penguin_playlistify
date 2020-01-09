import React from 'react';


export default function Playlist(props) {
    let imgUrl="https://static.prestapp.eu/wp-content/themes/superfine/assets/images/blog/no-img.jpg";
    if (props.image[0]){
       imgUrl = props.image[0].url;
    }
    return (
        <div className='Playlist'>
            <img src={imgUrl} alt={props.alt}/>
            <div className='Text'>{props.name}</div>
        </div>
    )
}
