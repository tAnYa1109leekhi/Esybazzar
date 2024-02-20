import React from 'react';
import Banner from './banner';
import HomeCategory from './homecategory';
import Categoryshowcase from './categoryshowcase';
import Register from './register';
import Location from '../components/locationspread';
import Aboutus from './aboutus';
import Appsection from './appsection';
import Sponsor from './sponsors';

const Home = () => {
  return (
    <div>
      
      <Banner/>
      <HomeCategory/>
      <Categoryshowcase/>
      <Register />
      <Location/>
      <Aboutus />
      <Appsection/>
      <Sponsor/>
      </div>
  )
}

export default Home