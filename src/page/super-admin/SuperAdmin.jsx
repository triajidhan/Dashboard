import React from 'react'
import './SuperAdmin.css';
import $ from 'jquery';
import Home from '../home/Home';

const SuperAdmin = () => {

    function crm() {
        if (navigator.cookieEnabled == true) {
            $('.dashboard__crm').css("visibility", "visible")
        }
    }

    return (
        <div onLoad={crm}>
            <Home />
        </div>
    )
}

export default SuperAdmin