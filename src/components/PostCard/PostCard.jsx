import { FaThumbsUp, FaThumbsDown, FaRegStar, FaEdit } from "react-icons/fa";

import Avatar from '../Avatar/Avatar';
import IconButton from "../IconButton/IconButton";
import './PostCard.css';

export default function PostCard(props) {
    return (
        <div className='post-card'>
            <div className='header'>
                <div className="avatar">
                    <Avatar name={props.user?.name.split(' ').slice(0, 2).map(name => name[0]).join('')} />
                </div>
                <h5>{props.title}</h5>
                <div>
                    {props.owner && <IconButton>  <FaEdit /></IconButton>}
                </div>
            </div>
            <div className='body'>
                <p>{props.body}</p>
            </div>
            <div className='footer'>
                <IconButton color='red'>  <FaThumbsUp /></IconButton>
                <IconButton color='blue'>  <FaThumbsDown /></IconButton>
                <IconButton color='yellow'>  <FaRegStar /></IconButton>
            </div>
        </div>
    );
}

