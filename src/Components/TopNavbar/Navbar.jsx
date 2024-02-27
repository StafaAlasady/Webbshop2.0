import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/No-back-logo.svg'
import ShoppingCart2LineIcon from 'remixicon-react/ShoppingCart2LineIcon';
import { Link } from 'react-router-dom';
export const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
<div className='navbar'>
  <div className='nav-logo'>
    <img src={logo} alt="" className='navbar-logo'/>
    <p>PixelProAI.Art</p>
  </div>
  <ul className='nav-menu'>
    <li onClick={()=>{setMenu("Home")}}><Link style={{ textDecoration:'none'}} to='/'>Home </Link>{menu==="Home"?<hr/>:<></>} </li>
    <li onClick={()=>{setMenu("MarketPlace")}}><Link style={{ textDecoration: 'none'}} to='/MarketPlace'>MarketPlace </Link>{menu==="MarketPlace"?<hr/>:<></>} </li>
    <li onClick={()=>{setMenu("Explore")}}><Link style={{ textDecoration: 'none'}} to='/Explore'>Explore </Link>{menu==="Explore"?<hr/>:<></>} </li>
    <li onClick={()=>{setMenu("Contact Us")}}><Link style={{ textDecoration: 'none'}} to='/Contact-us'>Contact Us </Link>{menu==="Contact Us"?<hr/>:<></>} </li>
  </ul>
  <div className='nav-login-cart'>
    <Link to='/Login'><button>Login</button></Link>
      <Link to='/Cart'> <ShoppingCart2LineIcon className='cart-icon' /></Link>
      <div className='nav-cart-count'>0</div>
  </div>
</div>
  )
}
