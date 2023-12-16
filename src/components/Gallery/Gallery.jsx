// import React from 'react'

import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { GalleryImgs } from '../../Data/data'
import "./Gallery.css"

const Gallery = () => {

  return (
    <div className="gallery-container">
        <SlideshowLightbox className="slideshow-wrapper">
            {
                GalleryImgs.map((img, i)=>{
                    return <img src={img} key={i} alt="" />;
                })
            }
        </SlideshowLightbox> 
    </div>
  )
}

export default Gallery