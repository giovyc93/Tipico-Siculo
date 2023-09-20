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
                const nomiChiese = data1.map((e) => e.name +"/")
                const viaChiese = data1.map((e) => e.street  +"/")
                const stileChiese = data1.map((e) => e.style  +"/")
                const descriptionChiese = data1.map((e) => e.description  +"/")
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
                    <p>{viaChiese}</p>
                    <p>{stileChiese}</p>
                    <p>{descriptionChiese}</p>
                </>
            ) : (
                'Loading data...'
            )}
        </div>

    );
};

export default DataContainer;