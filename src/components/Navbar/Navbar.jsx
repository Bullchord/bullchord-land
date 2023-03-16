import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logowhite.png';
import "./navbar.css";

// Try and understand BEM later BLOCK ELEMENT MODIFIER

const Menu = () => (
    <>
        {/* <p className='linkss'> <a href="#home">Artist</a> </p>  */}
        <p className='linkss'> <a href="/tokenomics">Token</a> </p> 
        <p className='linkss'> <a href="/docs">Roadmap</a> </p> 
        <p className='linkss'> <a href="/team">Team</a> </p> 

    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="bull3__navbar">
             <div className="bull3__navbar-links_logo">
                  <a href="/"><img src={logo} alt="logo" /></a>  
                </div>
            <div className="bull3__navbar-links">
                <div className='bull3__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='bull3__navbar-sign'>
                <button className='btn btn-1' type='button'> <a href="http://localhost:3000/" target="_blank" rel="noreferrer">Join Waitlist</a></button>
            </div>
            <div className='bull3__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine className='navicon' color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line className='navicon' color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='bull3__navbar-menu_container scale-up-hor-right'>
                        <div className='bull3__navbar-menu_container-links'>
                            <Menu />
                            <div className='bull3__navbar-menu_container-links-sign'>
                                {/* <p>Sign In</p> */}
                                <button className='btn btn-1' type='button'><a href="http://localhost:3000/" target="_blank" rel="noreferrer">Join Waitlist</a></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;