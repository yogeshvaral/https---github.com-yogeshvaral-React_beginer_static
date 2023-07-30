import React from 'react';
import phone_image from "../../images/phone-image.png" 
import email_image from "../../images/email-image.png"


export default function Contact({img, name, phone, email}){
    return (
        <div className='contact-card'>
            <img src={img} alt="profil-pic"></img>
            <h3>{name}</h3>
            <div className='info-group'>
                <img src={phone_image} alt="phone" className='phone-image'/>
                <p>{phone}</p>
            </div>
            <div className='info-group'>
                <img src={email_image} alt="email" className='email-image'/>
                <p>{email}</p>
            </div>
        </div>
    )
}