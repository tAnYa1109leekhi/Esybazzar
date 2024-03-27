import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
imgUrl: 'public/images/category/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: 'public/images/category/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
imgUrl: 'public/images/category/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Photography',
},
{
imgUrl: 'public/images/category/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Formal Dress',
},
{
imgUrl: 'public/images/category/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Colorful Bags',
},
{
imgUrl: 'public/images/category/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Home Decor',
},
];

const HomeCategory = () => {
  return <div className='category-section style-4  padding-tb'>
    <div className='container'>
       <div className='section-header  text-center'>
       <span className='subTitle'>{subTitle}</span>
       <h2 className='title'>{title}</h2>
    </div>
 
{/*section card */}
<div className='section-wrapper'>
<div className='row g-4 justify-content-center '>
{
         categoryList.map((val,i)=> (<div key ={i} className='col-lg-4 col-md-3 col-sm-2 col-12'>
        <Link to="/shop" className='category-item'>
     <div className='category-inner'>
    <div className='category-thumb'>
        <img src={val.imgUrl} alt=''></img>
    </div>
{/* content*/}
<div className="category-content">
    <div className="cate-icon">
       <i className={val.iconName}></i>
    </div>
   <Link to="/shop" ><h6>{val.title}</h6></Link>
</div>
    </div>
   </Link>
    </div>))
}
 </div>
<div className="text-center mt-5">
  <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
</div>
 </div>
</div>
 </div>
  
}

export default HomeCategory;