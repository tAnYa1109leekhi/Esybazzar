import { VpnLock } from '@mui/icons-material';
import React, { useState } from 'react'
import Ratting from '../components/ratting';
const reviwtitle = "Add a Review";

let ReviewList = [ { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];

const Review = () => {

const[review ,setReview] = useState(true);
  return (
    <div>
        <ul className={`review-nav lab-ul ${review ? "RevActive" : "DescActive"}`}>
            <li className='desc' onClick={()=>setReview(!review)}>desc</li>
            <li className='rev' onClick={()=>setReview(!review)}>rev</li>

        </ul>
         <div className={`review-content ${review ? "review-content-show" : "description-show"}`}>
            <div className="review-showing">
             <ul className='content lab-ul '>
                 {
                     ReviewList.map((val,i)=>(
                    <li key={i}>
                           <div className='post-thumb'>
                                 <img src={val.imgUrl} alt={val.imgAlt} />
                           </div>
                           <div className="post-content">
                             <div className="entry-meta">
                                <div className="posted-on">
                                   <a href="#">{val.name}</a>
                                   <p>{val.date}</p>
                                </div>
                             </div>
                             <div className="entry-content">
                               <p>{val.desc}</p>
                             </div>
                           </div>
                      </li>
                     ))
                 }
             </ul>

             <div className="client-review">
                <div className="review-form">
                    <div className="review-title">
                        <h5>{reviwtitle}</h5>
                    </div>

                    <form action="action" className='row'>
                         <div className="col-md-4 col-12">
                            <input type="text" placeholder="Full Name *" />
                         </div>
                         <div className="col-md-4 col-12">
                            <input type="text" placeholder="Your Email *" />
                         </div>
                         <div className="col-md-4 col-12">
                            <div className="rating">
                                <span className='me-2'> Your Rating</span>
                                <i className='icofont-star' style={{ color: 'orange' }}></i>
                                <i className='icofont-star' style={{ color: 'orange' }}></i>
                                <i className='icofont-star' style={{ color: 'orange' }}></i>
                                <i className='icofont-star' style={{ color: 'orange' }}></i>
                                <i className='icofont-star' style={{ color: 'orange' }}></i>

                            </div>
                         </div>

                         <div className="col-md-12 col-12">
                            <textarea name="message" id ="message "rows ="9" placeholder='Enter your Review'>
                             </textarea>
                         </div>
                         <div className="col-12">
                            <button type="submit" className='default-button'> 
                                <span>Submit button</span>
                            </button>
                         </div>
                    </form>

                </div>
             </div>
            </div>
            <div className="description">
               <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in voluptatibus amet ducimus quidem eius cumque nostrum! Necessitatibus itaque sint, ex iste asperiores error earum. Est doloribus inventore, esse quod totam adipisci vero saepe temporibus rem non quisquam maiores blanditiis! Harum numquam, debitis possimus, delectus officia nisi qui alias accusantium cumque corrupti, quod exercitationem?
               </p>
               <div className="post-item">
                <div className="post-thumb">
                    <img src="/src/assets/images/shop/01.jpg" alt="" />
                </div>
                <div className="post-content">
                    <ul className='lab-ul'>
                     <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. tum vero cupnt!</li>
                     <li>Loreaaaaaaaaaam dolor sit amet consectetur adipisicing elit. tum vero cupnt!</li>
                     <li>Lorem iplor sit amet consectetur adipisicing elit. tum vero cupnt!</li>
                     <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. tum vero cupnt!</li>
                     <li>Lorem ipsum doloraa ipisicing elit. tum vero cupnt!</li>
                     <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. tum vero cupnt!</li>
                     <li>Lorem ipsum dolor sur adipisicing elit. tum vero cupnt!</li>
                     
                    </ul>
                </div>
               </div>

               <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laborum dolores. Repudiandae inventore officia ipsam laboriosam ex nemo, doloribus quis autem atque quasi fugiat possimus consequatur repellendus amet architecto aperiam eius ipsa necessitatibus delectus beatae laudantium? Perspiciatis possimus mollitia repellat soluta!
               </p>
            </div>
         </div>

    </div>
  )
}

export default Review