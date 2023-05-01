import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({name,img}) => {
  return (
    <div className='card'>
        <h3>{name}</h3>
        <LazyLoadImage src={img} alt="pok.img" />
    </div>
  )
}

export default Card