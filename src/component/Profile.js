import React from 'react';
import "./Profile.css";
import julietPix from "../images/juliet.jpg";




function Profile() {
  return (
      <div className='profile'>

      <div className='owner'>
      <img src={julietPix
       } alt="My pix" /> 
      <h1 className='name'>Juliet Alaribe</h1>
      <h3 className='role'>Frontend Developer</h3>
      <small className='email'>julietalaribe.netlify.app</small>
      <div className='butns'>
        <button className='email-butn'>Email</button>
       <button className='linkedin-butn'> <a href="https://linkedin.com/in/juliet-alaribe" >LinkedIn</a>
       </button>
      </div>
      </div>


      </div>
  )
}

export default Profile