import React from 'react'
import date from "../products.json";

const Shopcategory = ({ filteritem ,
    setitem,
    menuitem,
    setproducts,
    selectedcategory}) => {
  return (
    <>
    <div className="widget-header">
        <h5 className='ms-2'>
            All Categories
        </h5>
    </div>
    <div >
    <button onClick={()=>setproducts(date)} className={`m-2 ${selectedcategory === 'All' ? " bg-warning ": ""}`}>All</button>
        {   
            menuitem.map((val,id)=>{
                return(
                    <button key={id} className={`m-2 ${selectedcategory === val ? " bg-warning ": ""}`}
                    onClick={()=>filteritem(val)}>{val}</button>
                )
            })
        }
    </div>
    </>
  )
}

export default Shopcategory