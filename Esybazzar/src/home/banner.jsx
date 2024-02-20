import React, { useState } from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SelectedCategory from '../components/SeletedCategory';


const title = <h2> Search your one from <span>million</span> of products</h2>
const desc = "We have the largest collection"

const bannerList = [ { iconName: "icofont-users-alt-4", text: "1.5 Million Customers", },
 { iconName: "icofont-notification", text: "More then 2000 Marchent", }, 
 { iconName: "icofont-globe", text: "Buy Anything Online", }, ];
const Banner = () => {
const[searchinput , setSearchInput] = useState("");
const[filterproduct , setFilterProduct] = useState(productData);

const handlesearch = e =>{
   const searchitem = e.target.value;
   setSearchInput(searchitem);

const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchitem.
  toLowerCase()));

setFilterProduct(filtered);
}

  return (
    <div className='banner-section style-4'>
      <div className='container'>
       <div className='banner-content'>
        
          {title}
           <form>
           <SelectedCategory select={"all"}/>
            <input type='text' name='search' placeholder='     Search your product'  value={searchinput} 
                 onChange={handlesearch}
            />
            <button type='submit'>
            <SearchIcon/>
            </button>
          </form>
          <p>{desc}</p>
        <ul   className='lab-ul'>
        {
          searchinput && filterproduct.map((product,i)=> <li key={i}>
             <Link to= {`/shop/${product.id}`}>{product.name}</Link>
          </li>)
        }
        </ul>
       </div>
      </div>

    </div>
  )
}

export default Banner