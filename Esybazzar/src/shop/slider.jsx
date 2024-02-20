import React from 'react';

const Slider = ({ productperpage, activepage, paginate, total }) => {
  const pagenum = [];
  for (let i = 1; i <= Math.ceil(total / productperpage); i++) {
    pagenum.push(i);
  }

  return (
    <ul className='default-pagination lab-ul'>
      <li>
        <a href="#" onClick={() => {
          if (activepage > pagenum.length) {
            paginate(activepage - 1);
          }
        }}>
          <li className='icofont-rounded-left'></li>
        </a>
      </li>

      {pagenum.map((num) => (
        <li key={num} className={`page-item ${num === activepage ? "bg-warning" : ""}`}>
          <button onClick={() => paginate(num)} className='bg-transparent'>{num}</button>
        </li>
      ))}
      <li>
        <a href="#" onClick={() => {
          if (activepage > pagenum.length) {
            paginate(activepage+1);
          }
        }}>
          <li className='icofont-rounded-right'></li>
        </a>
      </li>
    </ul>
  );
}

export default Slider;
