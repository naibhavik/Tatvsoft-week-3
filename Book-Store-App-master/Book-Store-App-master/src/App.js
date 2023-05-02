// import React, { useState } from 'react';
// import './App.css';
// import Home from './Pages/Home';
// import Title from './component/Title';
// import About from './Pages/About';
// const App = () => {
//   const[change, setchange] = useState(true)
//   const handleChange = () =>{
//     setchange(!change);
//   }
//   return (
//     <>
//       <Title title="Book-e-sell" desc="Online Book Selling" />
//       {change ? <Home /> : <About />}
//       <button onClick={handleChange}>Change Page</button>
//     </>

//   );
// }
import * as React from "react";
import ButtonAppBar from "./ButtonAppBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import LoginForm from "./component/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Footer from "./Footer";

import ProductPage from "./ProductPage";
import EditProduct from "./EditProduct";

const styles = {
  fontFamily: "Roboto",
};

export default function MyApp() {
  return (
    <>
      <Router>
        <ButtonAppBar></ButtonAppBar> 
        <PrimarySearchAppBar></PrimarySearchAppBar>
         <Routes>
          {/* <Route exact path="/">
             Home page component 
          </Route> */}
          <Route path="/" element={<LoginForm />}/>
          <Route path="/Register" element={  <Registration />}/>
        </Routes>
  {/* <ProductPage></ProductPage> 
  <EditProduct></EditProduct>  */}
        <Footer></Footer>
      </Router>
    </>
  );
}