import React, { useRef, useState } from "react";
import axios from 'axios';

export const TestForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [style, setStyle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [nameimg, setNameImg] = useState("");
  const [id, setId] = useState("");
  const idToUse = id;
  const deleteUrl = `http://localhost:5000/musei/${encodeURIComponent(idToUse)}`;
  const nameToUse = name;

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/musei');
      const data1 = response.data;
      const id = data1.map((e) => e.id)

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/musei", {
        name,
        city,
        street,
        style,
        description,
        nameimg,
        img: img.split(',')[1]  
      });
      console.log(response.data);
      alert("Data sent successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending data.");
    }
  };

  const handleUpdate = async () => {
    const updatedData = {
      name: name,
      city: city,
      street: street,
      style: style,
      description: description,
      nameimg : nameimg,
      img: img 
    };

    try {
      await axios.put(`http://localhost:5000/musei/${idToUse}`, updatedData);
      alert("Data updated successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating data.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const base64String = event.target.result;
      setImg(base64String);
    };
  
    reader.readAsDataURL(file);
  };


  const handleDelete = async () => {
    try {
      await axios.delete(deleteUrl);
      alert("Data deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting data.");
    }
  };
  return (
    <>
      <div className="totalContainer">

        <div className="contactUsContainer">
          <div
            className="form">
            <form className="form__content" ref={form} onSubmit={handleSubmit}>
              <div className="form__box">
                <input
                  type="text"
                  name="name"
                  className="form__input"
                  required
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="" className="form__label">
                  Nome
                </label>
                <div className="form__shadow"></div>
              </div>
              <div className="form__box">
                <input
                  type="text"
                  name="city"
                  className="form__input"
                  required
                  placeholder="Città"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="" className="form__label">
                  Città
                </label>
                <div className="form__shadow"></div>
              </div>
              <div className="form__box">
                <input
                  type="text"
                  name="street"
                  className="form__input"
                  required
                  placeholder="Via"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
                <label htmlFor="" className="form__label">
                  Via
                </label>
                <div className="form__shadow"></div>
              </div>
              <div className="form__box">
                <input
                  type="text"
                  name="style"
                  className="form__input"
                  required
                  placeholder="Style"
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                />
                <label htmlFor="" className="form__label">
                  Stile
                </label>
                <div className="form__shadow"></div>
              </div>
              <div className="form__box">
                <input
                  type="text"
                  name="Image Name"
                  className="form__input"
                  required
                  placeholder="Image Name"
                  value={nameimg}
                  onChange={(e) => setNameImg(e.target.value)}
                />
                <label htmlFor="" className="form__label">
                  Nome Immagine
                </label>
                <div className="form__shadow"></div>
              </div>
              <div className="form__box">
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  name="img"
                  className="form__input"
                  required
                  placeholder="Image"
                  onChange={(e) => handleFileChange(e)}
                />

                <div className="form__shadow"></div>
              </div>
              <div className="form__boxArea">
                <textarea
                  name="description"
                  className="form__inputSelectArea"
                  required
                  placeholder="Descrizione"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className="form__shadow"></div>
              </div>
              <div className="form__button">
                <input
                  type="submit"
                  className="button__content1"
                  value="Invia al Database"
                />

              </div>
            </form>
            <form className="form__content">
              <div className="form__box">
                <input
                  type="text"
                  name="street"
                  className="form__input"
                  required
                  placeholder="Id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                <label htmlFor="" className="form__label">
                  ID
                </label>
              </div>
              <input
                type="button"
                className="button__content1"
                value="cancella"
                onClick={handleDelete}
              />
              <input
                type="button"
                className="button__content1"
                value="modifica"
                onClick={handleUpdate}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestForm;
