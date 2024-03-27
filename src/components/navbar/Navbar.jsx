import React from 'react'
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from 'react-router-dom';
import "./navbar.scss";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="left">  

        <div className="center">
          <Link className ="link" to="/">BGChanger</Link>
        </div>

          <div className="item">
            <Link className ="link" to="/tools-api">Tools & API</Link>
          </div>

          <div className="item">
          <Link className ="link" to="/use-cases">UseCases</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/pricing">Pricing</Link>
          </div>
        </div>
      
       
        

        <div className="right">
      
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
          </div>
          <div className='item'>
            <img src="/img/icons8-india-flag-48.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
        
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
