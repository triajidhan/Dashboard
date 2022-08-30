import React from 'react'
import { FiMenu, FiPower } from 'react-icons/fi';
import $ from 'jquery';
import './Breadcrump.css';


function ToggleMenu() {
    function handleClick() {
        $('.navbar').toggleClass("navbar-toggle");
        $('.navbar__link').toggleClass("navbar__link-toggle");
        $('.navbar__brand').toggleClass("navbar__brand-toggle");
        $('.nav-toggle').toggle();
    }

    return (
        <div className='breadcrump__menu-toggle' onClick={handleClick}>
            <FiMenu className='breadcrump__menu-icon' />
        </div>
    )
}


const Breadcrump = () => {
    return (
        <div className='breadcrump'>
            <ToggleMenu />

            <div className='breadcrump__title'>
                <a href='#'><strong>Loan Market</strong> / Dashboard</a>
            </div>

            <div className='breadcrump__log-out'>
                <a href='#' className='breadcrump__log-out-text'>
                    <FiPower className='breadcrump__log-out-icon' />
                    Log out
                </a>
            </div>
        </div>
    )
}

export default Breadcrump