import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataContainer = () => {
    const [data, setData] = useState(null)
    const [nomiChiese, setNomiChiese] = useState(null);
    const [viaChiese, setViaChiese] = useState(null);
    const [stileChiese, setStileChiese] = useState(null);
    const [descriptionChiese, setDescriptionChiese] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/chiese');
                const data1 = response.data;
                const nomiChiese1 = data1.map((e) =><li>{"Nome Chiesa :"+ " " + e.name + " "+ " Via :" + e.street + " " +" Stile :" + e.style + " " +"Descrizione :"  + e.description}</li>)
                const nomiChiese = data1.map((e) =><div className='chiese'><h2>ID :</h2> <p>{e.id}</p><h2>Nome Chiesa :</h2> <p>{e.name}</p><h2>Città :</h2> <p>{e.city}</p> <h2>Via :</h2> <p>{e.street }</p> <h2>Stile :</h2> <p>{e.style}</p> <h2>Descrizione :</h2> <p>{e.description}</p></div>)
                // const viaChiese = data1.map((e) => <li>Via{e.street} </li>)
                // const stileChiese = data1.map((e) => "STILI :" + " " + e.style  +"/")
                // const descriptionChiese = data1.map((e) =>"DESCRIZIONI :" +" " + e.description  +"/")
                // const chiese = JSON.stringify(data1);
                setData(response.data);
                setNomiChiese(nomiChiese)
                setViaChiese(viaChiese)
                setStileChiese(stileChiese)
                setDescriptionChiese(descriptionChiese)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <div className="dataContainer">
            {data ? (
                <>
                    <p>{nomiChiese}</p>
                    {/* <p>{viaChiese}</p>
                    <p>{stileChiese}</p>
                    <p>{descriptionChiese}</p> */}
                </>
            ) : (
                'Loading data...'
            )}
        </div>

    );
};

export default DataContainer;