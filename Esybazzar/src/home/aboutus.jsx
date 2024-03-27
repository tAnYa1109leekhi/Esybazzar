import './aboutus.css';
import React from 'react'
import Countup from 'react-countup'
import { Link } from 'react-router-dom';
const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
{
iconName: 'icofont-users-alt-4',
count: '12600',
text: 'Marchant Enrolled',
},
{
iconName: 'icofont-graduate-alt',
count: '30',
text: 'Certified Courses',
},
{
iconName: 'icofont-notification',
count: '100',
text: 'Rewards and GitCards',
},
];
const Aboutus = () => {
    return (
        <div className="instructor-section style-2 padding-tb section-bg-ash">
          <div className="container ">
            <div className="section-wrapper ">
              <div className="row g-4 justify-content-center align-items-center rol-cols-1 rol-cols-md-2 rol-cols-xl-3">
                <div className="col  ">
                  {countList.map((val, i) => (
                    <div key={i} className="count-item">
                      <div className="count-inner">
                        <div className="count-icon">
                          <i className={val.iconName}></i>
                        </div>
                        <div className="count-content">
                          <h2>
                            <span className="count">
                              <Countup end={val.count} />
                            </span>
                            <span>+</span>
                          </h2>
                          <p>{val.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    
                <div className="col col-lg-3 col-md-6 col-sm-12 ">
                  <div className="instructor-content">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>
                    <Link to="/signup" className="lab-btn">
                      {btnText}
                    </Link>
                  </div>
                </div>
    
                <div className="col ">
                  <div className="instructor-thumb">
                    <img className="rounded-image" src="/assets/images/instructor/01.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };


export default Aboutus