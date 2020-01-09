import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Tracks from './Tracks.jsx';

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        overflowY: 'scroll',
        maxHeight: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Playlist(props) {
    let imgUrl = "https://static.prestapp.eu/wp-content/themes/superfine/assets/images/blog/no-img.jpg";
    if (props.image[0]) {
        imgUrl = props.image[0].url;
    }

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className='Playlist-Wrapper'>
            <div className='Playlist' onClick={handleOpen}>
                <img src={imgUrl} alt={props.alt} />
                <div className='Text'>{props.name}</div>
            </div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <Tracks playlistId={props.playlistId}/>
                    
                </div>
            </Modal>
        </div>
    )
}
