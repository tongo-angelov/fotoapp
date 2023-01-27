import './AlbumCard.css';

export default function AlbumCard(props) {
    return (
        <div className='album-card'>
            <img src={props.thumbnailUrl} />
            {/* <div className='imgContainer'>
                <div className='image' ></div>
            </div> */}
            <p>{props.title}</p>
        </div>
    );
}

