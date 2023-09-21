import palermo from "../assets/img/Palermo1.jpg";
import palermo1 from "../assets/img/Palermo5.jpeg";
import palermo2 from "../assets/img/Palermo7.jpg";
import palermo3 from "../assets/img/Palermo4.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsPage = () => {
  const [data, setData] = useState(null)
    const [nomiChiese, setNomiChiese] = useState(null);
    const [viaChiese, setViaChiese] = useState(null);
    const [stileChiese, setStileChiese] = useState(null);
    const [descriptionChiese, setDescriptionChiese] = useState(null);

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
    <div className="pageChurches" id="#products">
      <Navbar />
      <h2 className="blackTitle">Nome Chiesa</h2>
      <div className="churchesSection">
        <div className="churchesTexBox" >
          <h2>Descrizone Interni</h2>
          <p>
          {data && data.length > 0 && data[1].description}
                        </p>
          <h2>Descrizone Esterni</h2>
          <p>
            descrizionegjkgjhgatuòujythrejyrsssskfddafnwaofinfewafeafdewuhfwfowfhweofhewfewofhewfoewhfewof9ewhfewohfewofhewfoewhfewfhwfwhefewihfwfoihafhfewhfewfiohewafeaifhafiohefeiouhewfhefaoifefiuheafoiewahofiuhafewaoihfewaoiuadbfdbdbbfdbdfbfdnbdfbdfbdbdbfdbvcbvcbvcbvcbvcbvcbvcbcbcvbvbcbvcbvcbvcbvcbvcbvcbvcbcbcvbcbvcbvcbcbbbvcbcbvbcvcc
            afhfuifhififyghifygfewiyfgfifugrwfiuewgffiuewgfeiuyfewgfwigfeiugfewfiuewgiufgewfiywugfewiuyfgewufewgfwfwegfdewifugwfiwugfwfugefiuywgfwiuyfgweifiug
            fgewffugewfiuewfewifuewgfewiufgewfiuwfgiufwgfiugfifuwgfweiuyfgewifuwgfwifgfiuygfiwgefiewugfewifuewgfiuewgfifywgfwfiuyfwgwigiuwgfifgwe
            ewfeiyfwiufhwfiwuehfewiuyfhfiuwhfgfewiufgwfwfgewfwiuyegffhewfewgiuyfgewfiewugfifwgfwgiihfwieuyfgweiuyfgweiufgewfiuyegfiuewgfiewufwuygfwe
            wefewgfiewuygiufewgfiewufgewiufewkgfewfiuewfgiewgfiuyewgfewiuygfewugfewfewgfewiwiufgeugfgewiufgewfgiuewfguewgfwegewuygfwgfywgfewigfifuyewgfiuewgfewiugfwgfwiugfwfgwg
            wfuwgfiewgfewfiuygewfewufgewfuewgfufgewfoywgfewogf  Loremifwewqiyfewhofiygewfiuewgfewfewgfewiuygeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                        </p>
        </div>
        <div className="churchesImgContainer" >
          <div className="churchesImg" >
            <img src={palermo}></img>
          </div>
          <div className="churchesImg" >
            <img src={palermo1}></img>
          </div>
          <div className="churchesImg" >
            <img src={palermo2}></img>
          </div>
          <div className="churchesImg" >
            <img src={palermo3}></img>
          </div>
        </div>
        {/*    <div className="cardProductsContainer">
          <CardProduct
            titleCard="zona Ballarò "
            fotoCard="{DigitalTwin}"
            description="Lorem ipsum dolor sit amet,  Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="zona Capo"
            fotoCard="{AiLogo}"
            description="Lorem ipsum dolor sit ae commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="zona Maqueda"
            fotoCard="{ARLogo}"
            description="Lorem ipsum dolor sit ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
    
     
        </div>*/}
      </div>
      <div className="spaceContainerMed"></div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage;
