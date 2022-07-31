import React, { useState,useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { NavBar } from "antd-mobile";
import {Link} from 'react-router-dom'

// import {} from './style'

 const Choose = () =>{
    
    return(
        <div>
            <Link to='/'>
            <NavBar>
            全部
            </NavBar>
            </Link>
        </div>
    )
 }

 export default Choose