import React from 'react';


export default function Playlist(props) {
    return (
        <div className='Playlist'>
            
            <img src={props.image[0].url} alt={props.alt}/>
            <div className='Text'>{props.name}</div>
        </div>
    )
}