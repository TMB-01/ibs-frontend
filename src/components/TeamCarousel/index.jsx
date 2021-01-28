import React from 'react';
import Carousel, { consts }  from 'react-elastic-carousel';

import { ButtonLeft, ButtonRight } from './styles';
import './styles.css'
//comp
import CardFlip from "../TeamCardFlip";


export const MyCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 6 },
  ]

  // arrows
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointerLeft = type === consts.PREV ? '👈' : null
    const pointerRight = type === consts.NEXT ? '👉' : null
    return (
      <>
        {
          pointerLeft ? 
          (<ButtonLeft onClick={onClick} disabled={isEdge}>
            {pointerLeft}
          </ButtonLeft>)
          :
          (<ButtonRight onClick={onClick} disabled={isEdge}>
            {pointerRight}
          </ButtonRight>)
        }
      </>
    )
  }

  return (
    <div style={{marginRight: '40px', marginLeft: '40px'}}>
      <Carousel 
        renderArrow={myArrow}
        style={{width: '100%', marginBottom: 30}} 
        itemsToShow={3} 
        breakPoints={breakPoints} 
        focusOnSelect={true} 
        enableAutoPlay={true} 
        autoPlaySpeed={30000} 
        itemsToScroll={1}>
          <CardFlip />
          <CardFlip />
          <CardFlip />
          <CardFlip />
          <CardFlip />
        </Carousel>
    </div>
  )
};

export default MyCarousel;