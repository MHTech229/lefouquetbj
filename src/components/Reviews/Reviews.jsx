// import React from 'react'
import "./Reviews.css"
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Tilt from 'react-vanilla-tilt';
import { ReviewsData } from "../../Data/data";
import { FaStar,FaRegStar  } from "react-icons/fa";

const formatText = (text) =>{
  return text.slice(0, 120) + " .....";
}

const Reviews = () => {

  $(function(){
    $('#reviews-carousel').owlCarousel();
  });

  const options = {
    responsiveClass: true,
    nav: true,
    margin: 10,
    autoplay: true, 
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      1024: {
        items: 2,
      }
    }
  }

  return (
    <div className="reviews-carousel-container">
      <OwlCarousel id="reviews-carousel" className='owl-theme' {...options}>
        {
          ReviewsData.map((review, j) =>{
            return <Tilt className="reviews" key={j}>
              <div className="client">
                <div className="photo">
                  <img src={review.clientPhoto} alt="" />
                </div>
                <span className="name">{review.clientName}</span>
              </div>
              <div className="text">
                <p>{formatText(review.text)}</p>
              </div>
              <div className="stars">
                 {
                  review.reviews.map((star, j)=>{
                    if (star === "1") {
                      return <span key={j}><FaStar/></span>
                    }else if(star === "0"){
                      return <span key={j}><FaRegStar/></span>
                    }
                  })
                 }
              </div>
            </Tilt>
          })
        }
      </OwlCarousel>
    </div>
  )
}

export default Reviews