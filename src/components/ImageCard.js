import React from 'react';
import Headmaster from './headmaster.png';

function ImageCard() {
    return (
      <div className="profileCard">
          <img src={Headmaster} alt="Avatar" class="avatar" />
      </div>
    )
}

export default ImageCard;