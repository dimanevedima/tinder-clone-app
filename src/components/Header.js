import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className = "header">
      {backButton ? (
        <IconButton onClick = {() => history.replace(backButton)}>
        <ArrowBackIosIcon className = "header__icon" fontSize = "large"/>
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className = "header__icon" fontSize = "large"/>
        </IconButton>
      )}


      <Link to = "/">
          <img className = "header__logo" src = "https://cdn.worldvectorlogo.com/logos/tinder-2.svg " alt = "logo"></img>
      </Link>


      <Link to = "/chats">
        <IconButton>
          <QuestionAnswerIcon className = "header__icon" fontSize = "large"/>
        </IconButton>
      </Link>

    </div>
  )
};

export default Header;
