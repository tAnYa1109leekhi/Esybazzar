import React, { useState } from 'react';
import Pagebanner from '../components/pagebanner';
import Date from "../products.json";
import Productcard from './productcard';
import Slider from './slider';
import Select from './right';
import Shopcategory from './shopcategory';

const showres = "showing 01-12 of 149 Results ";

const Shop = () => {
  const [gridlist, setgridlist] = useState(true); 
  const [products, setproducts] = useState(Date);


  const [currpage, setcurrpage] = useState(1);
  const productperpage =12;

  const indexoflastpro = currpage*productperpage;
  const indexoffirstpro = indexoflastpro-productperpage;

  const currproduct = products.slice(indexoffirstpro,indexoflastpro);


  const [selectedcategory,setselectedcategory] = useState("All");
  const menuitem = [...new Set(Date.map((val) => val.category))];

  const filteritem =(currelem)=>{
    const newitem = Date.filter((newval)=>{
      return newval.category===currelem;
    })

    setselectedcategory(currelem);
    setproducts(newitem);
  }


  const paginate = (pagenum) =>{
    setcurrpage(pagenum);
  }

  return (
    <div>
      <Pagebanner title="Our Shop Page" curr="shop" />

      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showres}</p>
                  <div className={`product-view-mode ${gridlist ? "gridActive" : "listActive"}`}>
                    <a className='grid' onClick={() => setgridlist(true)}>
                      <i className='icofont-ghost'></i>
                    </a>
                    <a className='list' onClick={() => setgridlist(false)}>
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>

                <div>
                  <Productcard gridlist={gridlist} products={currproduct} />
                </div>
                       <Slider
                         productperpage ={productperpage}
                         activepage ={currpage}
                         paginate ={paginate}
                         total = {products.length}
                       
                       />
              </article>
            </div>
            <div className="col-lg-4 col-12">
             <Select products={products} gridlist={gridlist} />

             <Shopcategory
             filteritem ={filteritem}
             setitem ={setproducts}
             menuitem={menuitem}
             setproducts={setproducts}
             selectedcategory={selectedcategory}
             
             />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

