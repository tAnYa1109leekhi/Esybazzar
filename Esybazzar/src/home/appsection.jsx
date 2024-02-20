import React from 'react'
import { Link } from 'react-router-dom';
const btntext = "Sign up for free";
const title ="Shop Anytime , Anywhere ";
const desc = "take shop on your any device with our app & learn all the time what you want . Just downland and install & start to learn";


const Appsection = () => {
  return <div className="app-section  padding-tb">
    <div className="container">
    <div className="section-header text-center">
    <Link to="/sign-up" className='lab-btn mb-4'>{btntext}</Link>
    <h2 className='title'>{title}</h2>
    <p>{desc}</p>
    </div>

   <div className="section-wrapper">
    <ul className="lab-ul">
            <li><a href='#'><img src="/src/assets/images/app/01.jpg" alt="image" /></a></li>
            <li><a href='#'><img src="/src/assets/images/app/02.jpg" alt="image" /></a></li>
    </ul>
   </div>


    </div>
  </div>
}

export default Appsection