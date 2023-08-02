import React, { useState, useEffect } from 'react';
import Navbar from "./components/NavBar"
import jsonData from './File.json';
import Footer from './components/Footer';
import Sidebar from './components/SideBar';


function App() {

  const imgPath = require(`${jsonData[4].Immagini.frontale6}`);
  const allDescriptionPalermo = jsonData[4].descrizione.map((e)=> <p>{e}</p> )
  console.log(allDescriptionPalermo); 
  // useEffect(() => {

  //   setData(jsonData);
  //   setImg(jsonData[0].Immagini.pic1)
  const fetch = async (jsonData) => {
    const res = await fetch(jsonData);
    const data = await res.jsonData;
    console.log(data)
  }


  //  });

  // console.log(allDescriptionPalermo);


  return (
    <div className="page">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="image"> <img className='imageInside' src={imgPath} alt="" /></div>
        <div className="textBox">
           { allDescriptionPalermo}

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
