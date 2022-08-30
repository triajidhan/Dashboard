import React from 'react'
import SuperAdmin from "./page/super-admin/SuperAdmin";
import Home from "./page/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/super-admin" element={<SuperAdmin />} ></Route>

      </Routes>
    </BrowserRouter>
  )
}


export default App
