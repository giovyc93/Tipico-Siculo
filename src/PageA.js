
import Navbar from "./components/NavBar";
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import jsonData from './File.json';

import Sidebar from './components/SideBar';

function PageA() {
  const [Img, setImg] = useState("");
  const [data, setData] = useState([]);
  const imgPath =require(`${jsonData[4].Immagini.frontale1}`) ;

  useEffect(() => {

    setData(jsonData);
    setImg(jsonData[0].Immagini.pic1)


  }, []);


  return (
    <div className="pageA">
      <div className="navbarPageA"><Navbar/></div>
      <div className="leftSide"> </div>
      <div className="rightSide"><img className='imagePageA' src={imgPath} alt="" /></div>
      <div className=""><Footer/></div>

    </div>

  );
}

export default PageA;