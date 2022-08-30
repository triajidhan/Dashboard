import React from 'react'
import './Home.css';
import { Breadcrump, Dashboard, DataAnalytics, Footer, Navbar } from '../../component/index';



function Home() {
    return (
        <div className='home'>
            <Navbar />
            <main>
                <Breadcrump />
                <div className='main__content'>
                    <Dashboard />
                    <DataAnalytics />
                    <Footer />
                </div>
            </main>
        </div>

    );
}

export default Home;


