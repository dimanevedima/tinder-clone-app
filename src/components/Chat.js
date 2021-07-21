import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

function Chat({name, message, profilePic, timestamp}) {
  return (
    <Link to = {`/chats/${name}`}>
    <div className = "chat">
      <Avatar classname = "chat__image" alt = "name" src = {profilePic}/>
        <div class = "chat__details">
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p class = "chat__timestamp">{timestamp}</p>
    </div>
    </Link>
  )
}

export default Chat;
