import React from 'react'
import './SuperAdmin.css';
import { Breadcrump, Dashboard, DataAnalytics, Footer, Navbar } from '../../component/index';
import $ from 'jquery';

const SuperAdmin = () => {

    function crm() {
        if (navigator.cookieEnabled == true) {
            $('.dashboard__crm').css("visibility", "visible")
        }
    }

    return (
        <div className='super-admin' onLoad={crm}>
            <Navbar />
            <main>
                <Breadcrump />
                <Dashboard />
                <DataAnalytics />
                <Footer />
            </main>
        </div>
    )
}

export default SuperAdmin