import React, { useContext, useState } from 'react'
import  { Authcontext } from '../context/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const title = "Login";
const socialtitle = "Login with social Media";
const btntext = "Login Now";

const socialList = [ { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', },
 { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', },
  { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, 
  { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, 
  { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', }, ]

const Login = () => {

const[errormessage,seterrormessage] = useState("");
const {signUpwithEmail,login} = useContext(Authcontext);
const location = useLocation();
const navigate = useNavigate();

const from = location.state?.from?.pathname || "/";

const handlelogin =(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email,password).then((res)=>{
        const user = res.user;
        alert("Login Successful !")
        navigate(from,{replace: true})
    }).catch((error)=>{
        const errormsg = error.message;
        seterrormessage("Oops! Please provide valid email & Paasword ")
    })
}

const handleRegister =()=>{
    signUpwithEmail().then((result)=>{
        const user = result.user;
        navigate(from,{replace: true})
    }).catch((error)=>{
        const errorMsg = error.message;
        seterrormessage("Oops! Please provide valid email & Paasword ")
    })


}

  return (
    <div>
        <div className="login-section padding-tb section-bg">
          <div className="container">
            <div className="account-wrapper">
                <h3 className='title'>{title}</h3>
                <form className='account-form' onSubmit={handlelogin}>
                   <div className="form-group">
                    <input type="email" id='email' placeholder='Email Address *' required />
                   </div>
                   <div className="form-group">
                    <input type="password" id='password' placeholder=' Password *' required />
                   </div>
                   <div>

                    {
                         errormessage && (
                            <div className='error-message text-danger mb-2'>
                               {errormessage}
                            </div>
                         )
                    }

                   </div>
                   <div className='form-group'>
                    <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                    <div className="checkgroup">
                        <input type="checkbox"  name='remember' />
                        <label htmlFor="remember">Remember Me!</label>
                    </div>
                    <Link to='/forgetpass'>Forget Password</Link>
                    </div>
                   </div>
                   <div className='form-group' >
                           <button type='submit' className='d-block lab-btn'>
                            <span>{btntext}</span>
                            </button>  
                   </div>
                </form>

                <div className="account-bottom">
                    <span className='d-block cate pt-10'>
                        Don't have an Account?<Link to='/sign-up'>Sign Up</Link>
                    </span>
                    <span className='or'>
                        <span>or</span>
                    </span>

                    <h5 className='subtitle'>{socialtitle}</h5>
                   <ul className='lab-ul social-icons justify-content-center'>
                    <li>
                        <button className='github' type="button" onClick={handleRegister}><i className='icofont-github'></i></button>
                    </li>
                    <li>
                        <a href="/" className='twitter'> <i className='icofont-twitter'></i></a>
                    </li>
                    <li>
                         <a href="/"className='instagram'><i className='icofont-instagram'></i></a>
                    </li>
                    <li>
                        <a href="/"className='pinterest'><i className='icofont-pinterest'></i></a>
                    </li>
                    <li>
                           <a href="/"className='linkedin'><i className='icofont-linkedin'></i></a>
                    </li>
                   </ul>
                
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login