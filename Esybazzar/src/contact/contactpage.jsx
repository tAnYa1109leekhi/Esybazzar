import React from 'react'
import Pagebanner from '../components/pagebanner'
import Gmap from './map';
const subTitle = "Get in touch with us"; 
const title = "We're Always Eager To Hear From You!"; 
const conSubTitle = "Get in touch with Contact us"; 
const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better."; 
const btnText = "Send our Message";

const contactList = [ { imgUrl: "/src/assets/images/icon/01.png", imgAlt: "contact icon", title: "Office Address", desc: "1201 park street, Fifth Avenue", }, 
{ imgUrl: "/src/assets/images/icon/02.png", imgAlt: "contact icon", title: "Phone number", desc: "+22698 745 632,02 982 745", }, { imgUrl: "/src/assets/images/icon/03.png", imgAlt: "contact icon", title: "Send email", desc: "admin@shopcart.com", }, { imgUrl: "/src/assets/images/icon/04.png", imgAlt: "contact icon", title: "Our website", desc: "www.shopcart.com", }, ];

const Contactpage = () => {
  return (
    <div>
        <Pagebanner title={"Get in Touch With us"} curr={"Contact us"}/>
        <div className="map-address-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                   <span className='subtitle'>{subTitle}</span>
                   <h2 className='title'>{title}</h2>
                </div>

                <div className="section-wrapper">
                    <div className="row flex-row-reverse">
                        <div className="col-xl-4 col-lg-5 col-12">
                            <div className="contact-wrapper">
                                {
                                    contactList.map((val,i)=>(
                                        <div className='contact-item' key={i}>
                                            <div className="contact-thumb">
                                          <img src={val.imgUrl} alt={val.imgAlt} />
                                        </div>
                                        <div className="contact-content">
                                            <h6 className='title'>{title}</h6>
                                            <p>{val.desc}</p>
                                        </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="cols-xl-8 col-12 col-lg-7">
                            <Gmap/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className='subtitle'>{conSubTitle}</span>
                    <h2 className='title'>{conTitle}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder='Your name * ' />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder='Your email * ' />
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder='Phone number * ' />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder='Subject ' />
                        </div>
                        <div className="form-group w-100">
                            <textarea name="message" id="message" rows="8" placeholder='Your Message'></textarea>
                        </div>
                        <div className="form-group w-100 text-center">
                            <button className='lab-btn'>
                                <span>{btnText}</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Contactpage