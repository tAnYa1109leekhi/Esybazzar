import React, { useState } from 'react';
import { Link } from 'react-router-dom';

 export const Select = ({ products,gridlist }) => {
  const [searchitem, setsearchitem] = useState("");
  const filterproduct = products.filter((product) => product.name.toLowerCase().includes(searchitem.toLowerCase()));

  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          placeholder='search...'
          value={searchitem}
          onChange={(e) => setsearchitem(e.target.value)}
        />
        <button type="submit">
          <i className='iconfont-search-2'></i>
        </button>
      </form>

      <div>
        {searchitem && filterproduct.map((product) => (
          <Link key={product.id} to={`/shop/${product.id}`}>
            <div className="d-flex gap-3 p-2">
              <div>
                <div className="pro-thumb h-25">
                  <img src={product.img} alt="" width={70} className='flex-{grow/shrink}-0' />
                </div>
              </div>
              <div className="product-content">
                <p>
                  {product.name}
                </p>
                <h6>{product.price}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Select;
