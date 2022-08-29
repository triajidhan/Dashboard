import React from 'react'
import './App.css';
import Navbar from './component/navbar/Navbar';
import Breadcrump from './component/breadcrump/Breadcrump';
import Dashboard from './component/dashboard/Dashboard';
import DataAnalytics from './component/data-analytics/DataAnalytics';
import Footer from './component/footer/Footer';



function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Breadcrump />
        <Dashboard />
        <DataAnalytics />
        <Footer />
      </main>
    </div>

  );
}

export default App;


