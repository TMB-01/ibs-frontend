import React from 'react';
import './index.css'

import AvatarImg from '../../assets/images/avatar-1.png';

function CardFlip() {
  return (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="rounded-avatar">
                <img className="avatar-image" src={AvatarImg} alt="..."/>
              </div>
              <span className="avatar-name">Jeff Bezos</span>
              <h1 className="avatar-positon">Fullstack developer</h1>
            </div>
            <div className="flip-card-back">
              <div className="avatar-info">
                <h1 className="avatar-name-2">Jeff Bezos</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quod itaque, tenetur commodi animi sint sapiente neque.!
              </div>
            </div>
          </div>
        </div>
  );
}

export default CardFlip;