// import React from 'react';
import Nav from "../Nav/Nav";
import "./Header.css";
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Tilt from 'react-vanilla-tilt';
import { IoGiftSharp } from "react-icons/io5";
import { CarouselImgs } from "../../Data/data";
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";



const Header = () => {
  $(function(){
    $('.owl-carousel').owlCarousel({
      margin: 15,
      nav: true,
    });
  });


  return (
    <div id="Header">
      <Nav/>
      <div className="header-container">
        <div className="header">
            <h1 className="header-title">
              <span className="restaurant-name">Le Fouquet, </span>
              <span className="restaurant-slogan">Savourez la bonté, jour et nuit</span>
            </h1>
            <p className="header-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi praesentium eligendi iste similique fugit repellendus exercitationem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi praesentium eligendi iste similique fugit repellendus exercitationem.
            </p>
            <div className="buttons-container">
              <button className="qr-menu-btn">
                <a href="https://menu-lefouquetbj.netlify.app/" target="_blank" rel="noreferrer">
                  Menu Digital
                </a>
              </button>
              <button className="contact-btn">
                <a href="#contact">
                  Contactez-Nous
                </a>
              </button>
            </div>
        </div>
        <div className="header-carousel">
          <div className="header-carousel-box">
            <div className="pop-up">
              <div className="pop-icon"><IoGiftSharp /></div>
              <span className="pop-text">Ouvert tous les jours</span>
              <span className="pop-title">09H - 01H</span>
            </div>
            <Tilt className="carousel-container">
              <div className="greenBox"></div>
              <div className="carousel">
                  <div className="o-carousel">
                    <OwlCarousel className='owl-theme' autoPlay={true} loop margin={10} items={1} nav>
                          {
                            CarouselImgs.map((img, key)=>{
                              return <div className="img-container" key={key}><img src={img} alt="" /></div>
                            })
                          }
                    </OwlCarousel>
                  </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header