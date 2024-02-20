import React from 'react'

const subtitle = "Save the Day!";
const title =(
    <h2 className='title'>Join on the Day Long Free Workshop for <b>Advance<span>Mastering</span></b>on Sales</h2>
)
const desc = "Limited time offer! Hurry up ";


const Register = () => {
  return (
    <div className="register-section padding-tb pb-0">
        <div className="container">
            <div className="row  g-4 row-cols-lg-2 row-cols-1 align-item-center">
                 <div className="col">
                    <div className="section-header">
                        <span className='subtitle'>{subtitle }</span>
                        {title}
                        <p>{desc}</p>
                    </div>
                 </div>
 
<div className="col">
     <div className="section-wrapper">
       <h4>Register now</h4>
       <form className='register-form'>
        <input type='text' placeholder='Username' className='reg-input'></input>
        <input type='email' placeholder='Emai' className='reg-input'></input>
        <input type='number ' placeholder='Phone number' className='reg-input' inputMode='tel'/>

        <button type='submit' className='lab-btn'>
            Register now
        </button>
       </form>
    </div>
</div>

            </div>
        </div>
    </div>
  )
}

export default Register