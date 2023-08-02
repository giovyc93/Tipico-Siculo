import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonData from "../File.json";


const Sidebar = () => {
    
    const [data, setData] = useState([]);
  
    useEffect(() => {
  
      setData(jsonData);
     
  
  
    }, []);
    const allChurch = jsonData.map((e) => e.NomeChiesa);

  return (
    <div className="sideBar">
     <div className="sideTitle"><h2>Titolo</h2></div>
            
         
          <ul>
            <li></li>
            <li><a className='lista1' href="#">{allChurch[0]}</a></li>
            <li><a className='lista1' href="#about-us">{allChurch[1]}</a></li>
            <li><a className='lista1' href="#services">{allChurch[2]}</a></li>
            <li><a className='lista1' href="#contact-us">{allChurch[3]}</a></li>
        
           
          </ul>
    </div>
  );
}

export default Sidebar;