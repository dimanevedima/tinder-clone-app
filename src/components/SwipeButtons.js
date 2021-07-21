import React from 'react';

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton'

const SwipeButtons = (props) => {
  return (
    <div class = "swipe-b">
      <IconButton>
        <ReplayIcon fontSize = "large" className = "swipe-b__repeat"></ReplayIcon>
      </IconButton>

        <IconButton>
            <CloseIcon fontSize = "large"  className = "swipe-b__left"></CloseIcon>
        </IconButton>

        <IconButton>
          <StarRateIcon fontSize = "large"  className = "swipe-b__star"></StarRateIcon>
        </IconButton>

        <IconButton>
            <FavoriteIcon fontSize = "large" className = "swipe-b__heart"></FavoriteIcon>
        </IconButton>

        <IconButton>
            <FlashOnIcon fontSize = "large" className = "swipe-b__thunder"></FlashOnIcon>
        </IconButton>


    </div>
  )
}


export default SwipeButtons;
