import React, { useContext } from 'react'
import { Authcontext } from '../context/auth'
import { Navigate, useLocation,  } from 'react-router-dom';

const Privateroute = ({children}) => {

const{user,loading} = useContext(Authcontext);
const location = useLocation();

if(loading){
    return(
        <div>Loading....</div>
    )
}

if(user){
    return children;
}
  return (
   <div>
    <Navigate to="/login" state={{from : location}} replace></Navigate>
   </div>
  )
}

export default Privateroute