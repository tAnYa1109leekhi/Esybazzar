import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagebanner from '../components/pagebanner';
import deleteimgurl from "../assets/images/shop/del.png";
import Paymentpage from './payment';

const Cartpage = () => {
  const [cartitem, setCartitem] = useState([]);

  useEffect(() => {
    const storecartitem = JSON.parse(localStorage.getItem('cart')) || [];
    setCartitem(storecartitem);
  }, []);

  const totalprice = (item) => {
    return item.price * item.quantity;
  };

  const handleinc = (item) => {
    const updatedCart = cartitem.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartitem(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handledec = (item) => {
    const updatedCart = cartitem.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartitem(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleremove = (item) => {
    const updatedCart = cartitem.filter((cartItem) => cartItem.id !== item.id);
    setCartitem(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const carttotal = cartitem.reduce((total, item) => {
    return total + totalprice(item);
  }, 0);


  const ordertotal = carttotal;
  return (
    <div>
      <Pagebanner title={'OUR SHOP'} curr={'CARTPAGE'} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className='product'>Product</th>
                    <th className='price'>Price</th>
                    <th className='quantity'>Quantity</th>
                    <th className='total'>Total</th>
                    <th className='edit'>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartitem.map((item, i) => (
                    <tr key={i}>
                      <td className='product-item cart-product'>
                        <div className="p-thumb">
                          <Link to="/shop"><img src={item.img} alt={item.name} /></Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name} </Link>
                        </div>
                      </td>
                      <td className='cart-price'>${item.price}</td>
                      <td className='cart-quantity'>
                        <div className="cart-plus-minus">
                          <div className="dec qtybutton" onClick={() => handledec(item)}> -</div>
                          <input type="text" className='cart-plus-minus-box' value={item.quantity} readOnly />
                          <div className="inc qtybutton" onClick={() => handleinc(item)}>+</div>
                        </div>
                      </td>
                       <td className='cart-toprice'>${carttotal}</td>
                       <td className='cart-delete'>
                           <a href="#"><img src={deleteimgurl}  onClick={()=> handleremove(item)} /></a>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className='coupon'>
                  <input type="text" className='cart-page-input-text' placeholder='Coupon code...' />
                  <input type="submit" value={"Apply cupon"} />
                </form>
                <form className='cart-checkout' >
                       <input type="submit" value={"update cart"} />
                       <div><Paymentpage/></div>
                </form>
              </div>

               <div className="shiping-box">
                <div className="row">
                     <div className="col-md-6 col-12">
                      <div className="calculate-shiping">
                        <h3>Calculte Shipping</h3>
                        <div className="outline-select">
                          <select >
                            <option value="ss">Select Country</option>
                            <option value="uk" >United kingdom</option>
                            <option value="bg" >Bangladesh</option>
                            <option value="in" >India</option>
                            <option value="np" >Nepal</option>
                            <option value="af" >Africa</option>
                          </select>
                          <span className='select-icon'>
                            <i className='icofont-rounded-down'></i>
                          </span>
                        </div>
                        <div className="outline-select shiping-select">
                          <select >
                          <option value="ss">Select State</option>
                            <option  >New york</option>
                            <option  >Bali</option>
                            <option  >Dhaka</option>
                            <option  >London</option>
                            <option  >Delhi</option>
                          </select>
                          <span className='select-icon'>
                            <i className='icofont-rounded-down'></i>
                          </span>
                         </div>
                        <input type="text" placeholder='Postalcode/ZIP'  className='cart-page-input-text'/>
                    <button type='submit'>Update Address</button>
                      </div>
                     </div>
                     <div className="col-md-6 col-12">
                      <div className="cart-overview">
                        <h3>Cart totals</h3>
                     <ul className='lab-ul'>
                        <li>
                          <span className='pull-left'>Cart subtotal</span>
                          <p className='pull-right'>${carttotal}</p>
                        </li>
                        <li>
                          <span className='pull-left'>Shipping and Handling</span>
                          <p className='pull-right'>Free shipping</p>
                        </li>
                        <li>
                          <span className='pull-left'>Order Total</span>
                          <p className='pull-right'>${ordertotal.toFixed(2)}</p>
                        </li>
                     </ul>
                      </div>
                     </div>
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
