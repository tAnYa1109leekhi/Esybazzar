import { Outlet } from 'react-router-dom';
import './App.css'
import Navitems from './components/navitems';
import Footer from './components/footer';

function App(){

  return (
    <>
    <Navitems />
    <div className="min-vh-100">
    <Outlet /> 
    </div>
    
    <Footer/>  
    </>
  )
  }

export default App;
