import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime expedita facilis est architecto consequatur alias."


const Details = ({val}) => {
    const { name,id,price,seller,ratingsCount,quantity ,img} = val;

    const[prequatity , setQuatity] = useState(quantity);
    const[coupon , Setcupon] = useState("");
    const[size , Setsize] = useState("Select size");
    const[color , Setcolor] = useState("Select color");

    const handlechange = (e) => {
        Setsize(e.target.value);
    }

    const handlechangecolor = (e) => {
        Setcolor(e.target.value);
    }

    const handledesc = () =>{
         if(prequatity>1){
            setQuatity(prequatity-1);
         }
    }

    const handleinc = () =>{
        if(prequatity<1){
            setQuatity(prequatity+1);
         }
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            size: size,
            color: color,
            coupon: coupon,
            quantity: prequatity
        };

    
   const exitcart = JSON.parse(localStorage.getItem("cart")) || [];

   const existproductindex =  exitcart.findIndex((val )=> val.id === id);

   if(existproductindex !== -1){
    exitcart[existproductindex].quantity += prequatity;
   }
   else{
       exitcart.push(product);
   }

   localStorage.setItem("cart" , JSON.stringify(exitcart));
   setQuatity(1);
   Setsize("select size");
   Setcolor("select color");
   Setcupon("");
};
return (
    <div>
        <div>
        <h4>{name}</h4>
        <p className='rating'>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <i className='icofont-star'></i>
            <span> {ratingsCount}  review </span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>
            {desc}
        </p>

        </div>
        <div >
            <form onSubmit={handlesubmit} >
                <div className="select-product size">
                    <select value={size} onChange={handlechange}>
                        <option >Select size</option>
                        <option >SM</option>
                        <option >LD</option>
                        <option>MG</option>
                        <option>XL</option>
                        <option >XXL</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>

                <div className="select-product color">
                    <select value={color} onChange={handlechangecolor}>
                        <option >Select color</option>
                        <option >pink</option>
                        <option >black</option>
                        <option> blue</option>
                        <option>red</option>
                        <option >white</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>

                <div className="cart-plus-minus">
                    <div className="des qtybutton" onClick={handledesc}>-</div>
                   <input className=" cart-plus-minus-box" type="text" onChange = {(e)=>setQuatity(parseInt(e.target.value),10)} value={prequatity} />
                    <div className="inc qtybutton" onClick={handleinc}>+</div>
                </div>

                <div className="discont-code mb-2">
                   <input type="text" placeholder='Enter Discount code' onChange={(e)=>Setcupon(e.target.value)}/>
                </div>

               <button type='submit' className='lab-btn'>
               <span> Add to cart</span> 
               </button>

                <Link to ="/cart-page" className='lab-btn bg-primary'>
               <span>check out</span> 
               </Link>
            </form>
        </div>
    </div>
  )
}

export default Details