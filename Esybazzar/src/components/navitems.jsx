import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/loogo.png"
import InfoIcon from '@mui/icons-material/Info';




const Navitems = () => {

const [menutoggle , setMenutoggle] = useState(false);
const [socialtoggle , setSocialtoggle] = useState(false);
const [headerfixed , setHeaderfixed] = useState(false);

window.addEventListener("scroll" , () => {
   if(window.scrollY>2000){
    setHeaderfixed(true);
   }else{
    setHeaderfixed(false);
   }
})

  return (
    <header className={`header-section style-4  mt-0  ${headerfixed ? "header-fixed fadeInUp" : ""}`}
    >
    <div className={'header-top d-md-none ${socialtoggle ? "open" : ""}'}>
      <div  className='contanier-head'>
        <div className='header-top-area'>
         <Link to= "/sign-up" className='lab-btn me-3'><span>Create Account</span></Link>
          <Link to="/login">Log in</Link>
         </div>
         </div>
      </div>

    <div className='header-bottom'>
        <div className='container'>
            <div className='header-wrapper'>
                <div className='logo-search'>
                    <div className='logo  '>
                        <Link to ="/">
                        <img style={{ borderRadius: '50%' }} width="140" src={logo} alt="Logo" />
                         </Link>
                    </div>
                </div>

{/*  menu-bar  */}

<div className='menu-bar'>
    <div className='menu'>
        <ul className={`lab-ul  ${menutoggle ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">shop</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
        
        <li><Link to="/contact">Contact</Link></li>
        </ul>
</div>
</div>
        <Link to="/signup" className='lab-btn  me-3 d-none d-md-block'>Create account</Link>
        <Link to="/login" >Log in </Link>

    
<div onClick={() => setMenutoggle(!menutoggle)}    
  className={`header-bar d-lg-none ${menutoggle ? "active" : ""}`}>
  <span></span>
  <span></span>
  <span></span>
</div>
</div>
    </div>
    </div>

    </header>
  )
}

export default Navitems