import React, { useState } from 'react';
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
import Pagebanner from '../components/pagebanner';
import Tag from '../shop/tag';
import Popularpost from '../shop/popularpost';
const socialList = [ { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, 
{ iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', },
 { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, 
 { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', },
  { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', }, ]

const Blogdetails = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const res = blog.filter((p) => p.id === Number(id));

  return (
    <div>
      <Pagebanner title={"Single Blog Page"} curr={"Blog / Blogdetails"} />
      <div className="blog-section blog-single paddig-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row justify-content-center g-4 row-cols-1">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {res.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} alt={item.imgAlt} className='w-100'/>
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                 <ul className='lab-ul'>
                                  {
                                    item.metaList.map((val,i)=>(
                                      <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                    ))
                                  }
                                 </ul>
                              </div>
                              <p>
                              In today's fast-paced world, many of us find ourselves constantly juggling various responsibilities and obligations, leading to stress and anxiety. In the midst of this chaos, mindfulness meditation has emerged as a powerful tool for promoting mental well-being and cultivating a sense of inner peace. In this blog post, we'll explore the numerous benefits of mindfulness meditation and how it can positively impact your life.
                              </p>
                              
                              <blockquote>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minus laboriosam ipsa consectetur culpa, amet dolorem officiis voluptates. Est, atque.
                                
                                </p>
                                <cite>
                                  <a href="#">...Tanya leekhi</a>
                                </cite>
                              </blockquote>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa earum adipisci voluptate ducimus tempora facere quaerat perferendis in nesciunt modi quisquam culpa, eum unde, nobis eos illo voluptatum. Temporibus, accusamus?
                              </p>
                              <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, distinctio explicabo, eligendi laboriosam dolorum tempora eaque asperiores, porro nobis tenetur reiciendis! Quia quisquam blanditiis amet, optio deserunt sit sint! Sunt odit eos perspiciatis?
                              </p>
                              <div className="video-thumb">
                                <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                <a href="https://www.youtube.com/watch?v=BtQp2U6hJII"
                                target='__blank'
                                className='video-button popup'>
                                  <i className='icofont-ui-play'></i>
                                </a>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad hic laudantium adipisci aut quidem provident est, saepe exercitationem, itaque similique, iste laborum soluta! Alias perferendis labore dolor consequuntur perspiciatis repellat quis expedita? Impedit, quibusdam. Architecto voluptatum eius amet error commodi magni necessitatibus aliquid tempore neque cumque. Tenetur quos blanditiis suscipit nobis eos laborum dolorum.
                              </p>
                              <div className="tags-section">
                                <ul className='tags lab-ul'>
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Contact</a>
                                    </li>
                                </ul>
                                <ul className='lab-ul social-icons'>
                                  {
                                  socialList.map((val,i)=>(
                                    <li key={i}>
                                      <a href="#" className={val.className}>
                                        <i  className={val.iconName}></i>
                                      </a>
                                    </li>
                                  ))
                                  }

                                </ul>
                              </div>
                              </div>
                              
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className='navigations-part'> 
                       <div className="left">
                        <a href="#" className='prev'>
                          <i className='icofont-double-left'></i>Previous Blog
                        </a>
                        <a href="#" className='title'>
                        Lorem ipsum dolor sit amet consectetue. Quae aperiam architecto eum pariatur hic!
                        </a>
                       </div>

                       <div className="right">
                        <a href="#" className='prev'>
                          Next Blog<i className='icofont-double-right'></i>
                        </a>
                        <a href="#" className='title'>
                        Lorem ipsum dolor sit amet consectetue. Quae aperiam architecto eum pariatur hic!
                        </a>
                       </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>



            <div className="col-lg-4 col-12">
              <Tag/>
              <Popularpost/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
