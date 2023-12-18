// import React from 'react'
import {RestauImgs} from "../../Data/data"
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";
import  { motion } from 'framer-motion';


import "./Body.css";
const Body = () => {
  return (
    <main>
        <section className="main-section" id="about">
          <div className="section-title-container">
            <h2 className="section-title">A Propos</h2>
          </div>
          <div className="main-container">
            <div className="images-container">
              <div className="col1">
                <motion.div className="img" 
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
                  }}
                > 
                  <img src={RestauImgs[0]} alt="" />
                </motion.div>
                <motion.div className="img"
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
                      delay: 3
                  }}
                > 
                  <img src={RestauImgs[1]} alt="" />
                </motion.div>
              </div>
              <div className="col2">
                <motion.div className="img" 
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
                      delay: 1
                  }}
                > 
                  <img src={RestauImgs[2]} alt="" />
                </motion.div>
                <motion.div className="img"
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
                      delay: 2
                  }}
                > 
                  <img src={RestauImgs[3]} alt="" />
                </motion.div>
              </div>
            </div>
            <div className="text-container">
              <h3 className="presentation-title">Le Fouquet</h3>
              <p className="presentation">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quibusdam porro perspiciatis iusto voluptas aliquid, officia pariatur ducimus voluptatibus ut mollitia nostrum temporibus. Odit omnis totam atque earum quaerat ipsum!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quibusdam porro perspiciatis iusto voluptas aliquid, officia pariatur ducimus voluptatibus ut mollitia nostrum temporibus. Odit omnis totam atque earum quaerat ipsum!
              </p>
              <div className="slogan">
                <span className="slogan-text">
                  Savourez la bonté, <br /> jour et nuit !!!
                </span>
              </div>
        
            </div>
          </div>
        </section>
        <section className="main-section" id="review">
          <div className="section-title-container">
            <h2 className="section-title">Avis Clients</h2>
          </div>
          <div className="reviews-wrapper">
            <div className="backgroundImg">
              <img src="/img/Img20.png" alt="" />
            </div>
            <div className="reviews-container">
              <Reviews />
            </div>
          </div>
        </section>
        <section className="main-section" id="qrmenu-code">
          <div className="section-title-container">
            <h2 className="section-title">QR Menu</h2>
          </div>
          <div className="qrcode">
            <div className="qrcode-img">
              <img src="/img/qrcode.gif" alt="" />
            </div>
            <div className="qrcode-txt">
              <h3 className="qrcode-text-title">Veuillez scanner le QR Code 👇</h3>
              <div className="qrcode-container">
                <img src="/qrmenu.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="main-section" id="contact">
          <div className="section-title-container">
            <h2 className="section-title">Contact</h2>
          </div>
          <Contact/>
        </section>
        <section className="main-section" id="gallery">
          <div className="section-title-container">
            <h2 className="section-title">Galerie</h2>
          </div>
          <div className="main-wrapper">
            <Gallery/>
          </div>
        </section>
    </main>
  )
}

export default Body