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
import  { motion } from 'framer-motion';


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
            <motion.h1 className="header-title"
              initial={{
                translateY: 100,
                opacity: 0
              }}
              animate={{
                translateY: 0,
                opacity: 1
              }}
              exit={{
                translateY: 0,
                opacity: 1
              }}
              transition={{
                  duration: 2,
              }}
            >
              <span className="restaurant-name">Le Fouquet, </span>
              <span className="restaurant-slogan">Savourez la bonté, jour et nuit</span>
            </motion.h1>
            <motion.p className="header-text"
              initial={{
                translateY: 100,
                opacity: 0
              }}
              animate={{
                translateY: 0,
                opacity: 1
              }}
              exit={{
                translateY: 0,
                opacity: 1
              }}
              transition={{
                  duration: 2,
                  delay: 1
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi praesentium eligendi iste similique fugit repellendus exercitationem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi praesentium eligendi iste similique fugit repellendus exercitationem.
            </motion.p>
            <motion.div className="buttons-container" 
              initial={{
                translateY: 100,
                opacity: 0
              }}
              animate={{
                translateY: 0,
                opacity: 1
              }}
              exit={{
                translateY: 0,
                opacity: 1
              }}
              transition={{
                  duration: 2,
                  delay: 3
              }}
            >
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
            </motion.div>
        </div>
        <div className="header-carousel">
          <div className="header-carousel-box">
            <motion.div className="pop-up" 
              initial={{
                scale: 0,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              exit={{
                scale: 1,
                opacity: 1
              }}
              transition={{
                  duration: 2,
                  delay: 0.75
              }}
            >
              <div className="pop-icon"><IoGiftSharp /></div>
              <span className="pop-text">Ouvert tous les jours</span>
              <span className="pop-title">09H - 01H</span>
            </motion.div>
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