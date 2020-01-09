import React from 'react';


export default function Track(props) {
    return (
        <div className='Playlist' >
            <img src={props.imageTrack} />
            <div className='Text'>{props.name}</div>
        </div>
    )
}
