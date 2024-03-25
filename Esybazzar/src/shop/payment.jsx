import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import "../components/model.css";
import { Navigate, useLocation, useNavigate, useNavigation } from 'react-router-dom';

const Paymentpage = () => {
    const [show, setShow] = useState(false);
    const [activetab, setActivetab] = useState("visa");

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleChange = (tabId) => {
        setActivetab(tabId);
    };

    const location = useLocation();
    const Navigate =  useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleorderconfirm =()=>{
       alert("Your order is placed Successfully!")
       localStorage.removeItem("cart");
       Navigate(from,{replace : true});
    };

    return (
        <div className='modalcard'>
            <button type="button" className="btn btn-primary py-2" onClick={handleShow}>Proceed to checkout</button>
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered
            >
                <div className="modal-dialog">
                    <h5 className='px-3 mb-3'>Select Your payment Method</h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation '>
                                        <a className={`nav-link ${activetab === "visa" ? "active" : ""}`}
                                            id="visa-tab"
                                            role='tab'
                                            data-toggle="tab"
                                            aria-controls='visa'
                                            aria-selected={activetab === "visa"}
                                            onClick={() => handleChange("visa")}
                                            href="#visa"><img src="https://jokercard.ca/wp-content/uploads/2023/05/visa_MC.webp" width="80" alt="Visa" /></a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activetab === "paypal" ? "active" : ""}`}
                                            id="paypal-tab"
                                            role='tab'
                                            data-toggle="tab"
                                            aria-controls='paypal'
                                            aria-selected={activetab === "paypal"}
                                            onClick={() => handleChange("paypal")}
                                            href="#paypal"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png" width="80" alt="PayPal" /></a>
                                    </li>
                                </ul>

                                <div className="tab-content" id='myTabContent'>
                                    <div className={`tab-pane fade ${activetab === "visa" ? "show active" : ""}`}
                                        id="visa"
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'>
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Credit card</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" id='name' className='form-control' required />
                                                    <span>Cardholder name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="number" id='number' className='form-control' min="1" max="999" required />
                                                    <span>Cardholder number</span><i className='fa fa-eye'></i>
                                                </div>
                                                <div className="flex-row d-flex">
                                                    <div className="inputbox">
                                                        <input type="number" className='form-control' min="1" max="999" required />
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="number" className='form-control' required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-success btn-block' onClick={handleorderconfirm}>Order Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                  </div>
                                    <div className={`tab-pane fade ${activetab === "paypal" ? "show active" : ""}`} 
                                        id="paypal" role='tabpanel'
                                         aria-labelledby='paypal-tab'>
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Paypal Account info</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="email" id='paypal-email' className='form-control' required />
                                                    <span>Enter your email</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" id='paypal-name' className='form-control' required />
                                                    <span>Your Name</span>
                                                </div>
                                                <div className='flex-row d-flex'>
                                                <div className="inputbox">
                                                    <input type="text" id='paypal-extra-info' className='form-control' required />
                                                    <span>Extra info</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" id='paypal-extra-info' className='form-control' required />
                                                    <span></span>
                                                </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-success btn-block' onClick={handleorderconfirm}>Add paypal</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                    
                                </div>

                                <p className='mt-3 px-4 p-Disclaimer '>
                               <em> Payment disclaimer:</em> All transactions final. No refunds or cancellations. Payment indicates agreement to terms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Paymentpage;