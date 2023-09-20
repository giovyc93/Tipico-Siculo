import React, { useRef, useState } from "react";
import axios from 'axios';

export const TestForm = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [style, setStyle] = useState("");
  const [description, setDescription] = useState("");

 

  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        const response = await axios.post("http://localhost:5000/chiese", {
          name,
          city,
          street, 
          style,
          description,
        },);
  
        console.log(response.data);
        alert("Data sent successfully!");
      } catch (error) {
        console.error(error);
        alert("An error occurred while sending data.");
      }
    };
    
  const handleDelete = async () => {
    try {
      // Make an Axios DELETE request to delete data
      await axios.delete("http://localhost:5000/chiese");
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
                  value="invia"
                />
             
              </div>  
              <input
                  type="button"
                  className="button__content1"
                  value="cancella"
                  onClick={handleDelete}
                /> 
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestForm;
