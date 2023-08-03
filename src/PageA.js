


import jsonData from './File.json';

import Sidebar from './components/SideBar';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function Side() {

  // const [Img, setImg] = useState("");
  // const [data, setData] = useState([]);
  const imgPath =require(`${ jsonData[0].Immagini.frontale2}`)
  
  console.log(imgPath);

  // useEffect(() => {

  //   setData(jsonData);
  //   setImg(jsonData[0].Immagini.pic1)


  // }, []);


  return (
    <div className="pageA">
      <div className="navbarPageA"><Navbar/></div>
      <div className="leftSide"> </div>
       <div className="rightSide"><img className='imagePageA' src={imgPath} alt="" /></div> 
      <div className=""><Footer/></div>

    </div>

  );
}

export default Side;