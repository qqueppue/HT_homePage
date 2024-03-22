import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

import { Main, Greetings, Product, Cutomer, Test } from "../pages";

import Footer from './Footer';
import Header from './Header';
// import NotFond from './NotFond';
import '../styles/App.css';

function App() {
  return (
    <div>
      <Header />

      {/* 경로 */}
      <Routes>
        <Route path="/" element={ <Main /> }></Route>
        <Route path="/company" element={ <Greetings /> }></Route>
        <Route path="/product" element={ <Product /> }></Route>
        <Route path="/contact" element={ <Cutomer /> }></Route>
        <Route path="/test" element={ <Test /> }></Route>
        <Route path="/*" element={ <Main /> }></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
