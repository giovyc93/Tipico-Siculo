import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './App'; // Check if this is the correct import path
import PageA from "./PageA"; // Check if this is the correct import path
import PageB from "./PageB";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ciao" element={<PageA />} />
     
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
