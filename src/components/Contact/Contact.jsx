// import React from 'react'
import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [userName,setUserName] = useState("");
  const [userMessage,setUserMessage] = useState("");

  const destinationNumber = "+22991391414";
  const message = `Bonjour Monsieur Madame/Monsieur.\nJe m'appelle ${userName}.\n${userMessage}`;

  const sendMessage = (e) =>{
    e.preventDefault();
    window.open('https://api.whatsapp.com/send?phone=' + encodeURIComponent(destinationNumber) + '&text=%20' + encodeURIComponent(message), '_blank').focus();
    setUserName("");
    setUserMessage("");
 }

  return (
    <div className="contact-Container">
        <div className="contact-form-container">
            <div className="form-image">
                <img src="/img/background.png" alt="" />
            </div>
            <form>
                <input type="text" name='userName' id='userName' placeholder="Nom Complet" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                <textarea name="userMessage" id="userMessage" placeholder="Votre Message" value={userMessage} onChange={(e)=>setUserMessage(e.target.value)}></textarea>
                <button type="button" onClick={sendMessage}>Soumettre</button>
            </form>
        </div>
        <div className="contact-map-container">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15857.257666441234!2d2.3464332!3d6.4818058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a95c5743e841%3A0xaa374d4a3e5755!2sLe%20Fouquet!5e0!3m2!1sfr!2sbj!4v1702552765909!5m2!1sfr!2sbj" 
            width="600" 
            height="450" 
            allowfullscreen="" 
            loading="lazy" 
            ></iframe>
        </div>
    </div>
  )
}

export default Contact