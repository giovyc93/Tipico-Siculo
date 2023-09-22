import React, { useState, useEffect } from 'react';
import axios from 'axios';




const Sidebar = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/chiese');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sideBar">
      <div className="sideTitle">
        <h2>Link utili</h2>
      </div>
      <ul>
        <li></li>
        {/* <li>
          <a className="lista1" href="#page">
          {data && data.length > 0 && data[0].name}
          </a>
        </li>
        <li>
          <a className="lista1" href="#about-us">
          {data && data.length > 0 && data[1].name}
          </a>
        </li>
        <li>
          <a className="lista1" href="#services">
          {data && data.length > 0 && data[2].name}
          </a>
        </li>
        <li>
          <a className="lista1" href="#contact-us">
          {data && data.length > 0 && data[3].name}
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
