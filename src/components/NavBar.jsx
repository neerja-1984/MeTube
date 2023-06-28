import React from 'react'
import { Link } from "react-router-dom";

import { logo } from "./utilities/Constants"
import {SeacrhBar}  from "./"

const NavBar = () => (
  <div className = "searchBar_style">

    {/* on clicking logo ..move to Feed page */}
    <Link 
      to="/" 
      style={{ display: "flex", alignItems: "center"  
    }}>

      <img src={logo} alt="logo" height={45} style={{ marginLeft: "auto" }} />
    </Link>
    <SeacrhBar className = ".searchBar_position"  />
  </div>
)
export default NavBar

