import React from 'react'
import { Link } from 'react-router-dom';

const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join from NorthAmerica',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join from Greenland',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join from asia',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join from South America',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join from Africa',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join from Australia',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join from Russia',
},
];


const Location = () => {
  return <div className="clients-section  style-2 padding-tb">
    <div className="container">
         <div className="section-header text-center">
             <h2 className='title'>{title}</h2>
             <p>{desc}</p>
         </div>

   <div className="section-wrapper">
    <div className="clients">
           {
            clientsList.map((val,i)=>(
            <div key={i} className='client-list'>
               <Link to="/" className='client-content'>
                   <span>{val.text}</span>
              </Link>

              <div className='client-thumb'>


<img src={val.imgUrl}></img>
                </div>
            </div>
            ))
           }
    </div>
   </div>

      </div>
  </div>
}

export default Location