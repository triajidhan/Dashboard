import React from 'react'
import './App.css';
import { Breadcrump, Dashboard, DataAnalytics, Footer, Navbar } from './component/index';



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


