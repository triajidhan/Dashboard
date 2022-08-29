import React, { useState } from 'react'
import { FiHome, FiUser, FiChevronDown } from 'react-icons/fi';
import { BiPencil } from 'react-icons/bi';
import './Navbar.css';


const Navbar = () => {

    return (
        <nav className='navbar'>
            <div className='navbar__brand'>
                <img className='navbar__brand-logo' src='assets/images/lm-logo.png' alt='' />
                <div className='navbar__brand-title nav-toggle'>Yoseph Duna</div>
                <div className='navbar__brand-subtitle nav-toggle'>Author</div>
            </div>

            <div className='navbar__links'>
                <div className='navbar__link'>
                    <FiHome className='navbar__link-icon' />
                    <a href='#' className='navbar__link-title nav-toggle'>Dashboard </a>
                </div>

                <div className='navbar__link'>
                    <FiUser className='navbar__link-icon' />
                    <a href='#' className='navbar__link-title nav-toggle'>User Management</a>
                </div>

                <div className='navbar__link'>
                    <BiPencil className='navbar__link-icon' />
                    <a href='#' className='navbar__link-title nav-toggle'>News</a>
                    <FiChevronDown className='navbar__link-icon navbar__link-icon-down nav-toggle' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar