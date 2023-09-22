import React, { useState, useEffect } from 'react';
import axios from 'axios';

function bufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer.data);
  const len = bytes.byteLength;

  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return window.btoa(binary);
}

const DataContainer = () => {
  const [data, setData] = useState(null);
  const [datiMusei, setDatiMusei] = useState(null);
  const [imgMusei, setImgMusei] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/musei');
        const data1 = response.data;

        const datiMusei = data1.map((e) => (
          <div className='chiese' key={e.id}>
            <p>ID :</p> <h3 className='data'>{e.id}</h3>
            <p>Nome Museo :</p> <h3 className='data'>{e.name}</h3>
            <p>Città :</p> <h3 className='data'>{e.city}</h3>
            <p>Via :</p> <h3 className='data'>{e.street}</h3>
            <p>Stile :</p> <h3 className='data'>{e.style}</h3>
            {e.img && (
              <img
                src={`data:image/jpeg;base64,${bufferToBase64(e.img)}`}
                alt='Museum Image'
              />
            )}
            <h3 className='data'>{e.nameimg}</h3>
          </div>
        ));

        const imgData = data1.map((e) => ({
          id: e.id,
          img: bufferToBase64(e.img),
        }));

        setData(response.data);
        setDatiMusei(datiMusei);
        setImgMusei(imgData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='dataContainer'>
      <div className='dataTitleContainer'>
        <h2 className='dataTitle'>{data && `Lista Musei`}</h2>
        <br />
      </div>
      {data ? (
        <>
          <p>{datiMusei}</p>
          {/* {imgMusei &&
            imgMusei.map((imgItem) => (
              <img className='dataImg'
                key={imgItem.id}
                src={`data:image/jpeg;base64,${imgItem.img}`}
                alt='Museum Image'
              />
            ))} */}
        </>
      ) : (
        'Loading data...'
      )}
    </div>
  );
};

export default DataContainer;
