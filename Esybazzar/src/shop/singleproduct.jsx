import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagebanner from '../components/pagebanner';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Autoplay} from "swiper/modules";
import { key } from 'localforage';
import Details from './details';
import Review from './review';
import Popularpost from './popularpost';
import Tag from './tag';

const Singleproduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/src/products.json")
            .then(r => r.json())
            .then(data => setProduct(data));
    }, []);

    const res = product.filter(p => p.id === id);
  return (
    <div>
        <Pagebanner title={"OUR SHOP SINGLE "} curr={"shop /  Singleproduct "}/>
        <div className="shop-single padding-tb aside-bg">
            <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 lg-12">  
                    
                    <article>
                     <div className="product-details">
                        <div className="row align-items-center">
                               <div className="col-md-6 col-12">
                                   <div className="product-thumb">
                                       <div className="swipper-container pro-single-top">
                                       <Swiper
                                       spaceBetween={30}
                                       slidesPerView={1}
                                       loop ={"true"}
                                       autoplay ={{
                                        delay : 2000,
                                        disableOnInteraction :false
                                       }}
                                       modules={[Autoplay]}
                                       navigation={{
                                        prevEl : ".pro-single-prev",
                                        nextEl : ".pro-single-next",

                                       }}
                                       
                                       className="mySwiper">
                                                {
                                                    res.map((val,id)=>(
                                                        <SwiperSlide>
                                                            <div className="single-thumb">
                                                              <img src= {val.img} />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                        </Swiper>

                                       <div className="pro-single-next"><i className='icofont-rounded-left'></i></div>
                                       <div className="pro-single-prev"><i className='icofont-rounded-right'></i></div>                               
                                    </div>
                                   </div>
                               </div>
                               <div className="col-md-6 col-12">
                                     <div className="post-content">
                                        <div>
                                            {
                                                res.map(val =><Details key={val.id} val = {val} /> )
                                            }
                                        </div>
                                     </div>
                               </div>
                        </div>
                     </div>
                         <div className="review">
                           <Review/>
                         </div>
                    </article>
                     </div>

                    <div className="col-lg-4 lg-12">  
                    <aside className='ps-lg-4'>
                    <Popularpost/>
                    <Tag/>
                    </aside>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Singleproduct