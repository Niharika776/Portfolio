import React, { useState } from 'react';
import "./navbar.css"
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';
import contactImg from "../../assets/contactImg.png";
import Menu from "../../assets/menu.png";

const Navbar=()=>{
    const [showMenu,setShowMenu]=useState(false);
    return(
        <nav className='navbar'>
            <img src={logo} alt="logo" className='logo'/>
            <div className='desktopMenu'>

                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About </Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients </Link>

            </div>

            <button className='desktopMenubtn' onClick={()=>{
                document.getElementById('contact').scrollIntoView({behaviour:'smooth'});
            }}>
                <img src={contactImg} alt='' className='desktopMenuImg'/> Contact me
            </button>

            <img src={Menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}
 >

                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About </Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Clients </Link>

            </div>


         </nav>
    )
}

export default Navbar;