import { useState } from "react";
import "./Footer.css";
import { FaInstagram,FaFacebook,FaWhatsapp } from "react-icons/fa";


const Footer = () => {

  const [userNumber, setUserNumber] = useState("");
  const destinationNumber = "+22991391414";
  const message = `Je souhaite m'abonner à votre compte whatsapp et suivre vos statuts.\n Voici nom numeros whatsapp : ${userNumber} .\n Merci de m'ajouter à votre liste de contact 🙏🙏🙏.`;

  const sendFollower = (e) =>{
    e.preventDefault();
    window.open('https://api.whatsapp.com/send?phone=' + encodeURIComponent(destinationNumber) + '&text=%20' + encodeURIComponent(message), '_blank').focus();
    setUserNumber("");
  }

  return (
    <footer id="footer">
      <div className="footer-container">
            <div className="footer-title-container">
                <h1>Le Fouquet</h1>
            </div>
            <div className="suscribe-form-container">
                <div className="form_container">
                    <form>
                        <input type="number" name="suscriberNumber" id="suscriberNumber" placeholder="Votre Numeros Whatsapp" value={userNumber} onChange={(e)=> setUserNumber(e.target.value)}/>
                        <button className="subscription-btn" onClick={sendFollower}>
                            <span className="suscribe-icon"><FaWhatsapp /></span>
                            <span className="suscribe-txt">Suivre</span>
                        </button>
                    </form>
                </div>
            </div>
            <div className="fouquet-details">
                <div className="fouquet-logo">
                    <img src="/logo.png" alt="Logo de Canal Olympia" />
                </div>
                <div className="fouquet-social-links">
                    <div className="social-link">
                        <a href="https://www.facebook.com/lefouquet229/" className="facebookLink">
                            <FaFacebook />
                        </a>
                    </div>
                    <div className="social-link">
                        <a href="https://www.instagram.com/lefouquet/" className="instagramLink">
                            <FaInstagram/>
                        </a>
                    </div>
                    <div className="social-link">
                        <a href="https://wa.me/+22991391414" className="whastappLink">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer