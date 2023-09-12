// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import nuovoMess from "../assets/img/nuovoMessaggio.png";
// import posizione1 from "../assets/img/gps.png";
// import telefono from "../assets/img/telefono.png";
// import BackgroundImg from "../assets/img/background.jpg";
// import axios from 'axios';

// export const TestForm = () => {
//   const form = useRef();

//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [company, setCompany] = useState("");
//   const [city, setCity] = useState("");
//   const [email, setEmail] = useState("");
//   const [position, setPosition] = useState("");
//   const [hobby, setHobby] = useState("");
//   const [department, setDepartment] = useState("");
//   const [requestType, setRequestType] = useState("");
//   const [message, setMessage] = useState("");

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     try {
//       await emailjs.sendForm(
//         "service_y5dcyiq",
//         "template_nn3u8u7",
//         form.current,
//         "Xm2Or-M51PWJ7PbN8"
//       );
//     } catch (error) {
//       console.log("An error occurred while sending the email.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//       try {
//         const response = await axios.post("http://localhost:5000/api/web/create/UsersDetails", {
//           name,
//           surname,
//           company,
//           city,
//           email,
//           position,
//           hobby,
//           department,
//           requestType,
//           message,
//         }, {
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "http://localhost:3000",
//           },
//         });
  
//         console.log(response.data);
  
//         sendEmail(e);
  
//         alert("Data and email sent successfully!");
//       } catch (error) {
//         console.error(error);
//         alert("An error occurred while sending data and email.");
//       }
//     };

//   return (
//     <>
//       <div className="totalContainer">
//         {/* <div className="contactUsInfo">
//           <div className="boxContactUs">
//             <div className="icon">
//               <img src={posizione1} alt="gps"></img>
//             </div>
//             <div className="text">
//               <h3>Indirizzo</h3>
//               <p>Via Guadagna,93</p>
//             </div>
//           </div>
//           <div className="boxContactUs">
//             <div className="icon">
//               <img src={nuovoMess} alt="mess"></img>
//             </div>
//             <div className="text">
//               <h3>Email</h3>
//               <p>Prismed@prismed</p>
//             </div>
//           </div>
//           <div className="boxContactUs">
//             <div className="icon">
//               <img src={telefono} alt="cell"></img>
//             </div>
//             <div className="text">
//               <h3>Contatto</h3>
//               <p>091-000-111-33</p>
//             </div>
//           </div>
//         </div> */}
//         <div className="contactUsContainer">
//           <div
//             className="form"
//             // style={{
//             //   backgroundImage: `url(${BackgroundImg})`,
//             //   backgroundRepeat: "no-repeat",
//             //   backgroundSize: "cover",
//             // }}
//           >
//             <form className="form__content" ref={form} onSubmit={handleSubmit}>
//               <div className="form__box">
//                 <input
//                   type="text"
//                   name="name"
//                   className="form__input"
//                   required
//                   placeholder="Nome"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <label htmlFor="" className="form__label">
//                   Nome Chiesa
//                 </label>
//                 <div className="form__shadow"></div>
//               </div>
//               <div className="form__box">
//                 <input
//                   type="text"
//                   name="surname"
//                   className="form__input"
//                   required
//                   placeholder="Cognome"
//                   value={surname}
//                   onChange={(e) => setSurname(e.target.value)}
//                 />
//                 <label htmlFor="" className="form__label">
//                   Città Chiesa
//                 </label>
//                 <div className="form__shadow"></div>
//               </div>
//               <div className="form__box">
//                 <input
//                   type="text"
//                   name="company"
//                   className="form__input"
//                   required
//                   placeholder="Azienda"
//                   value={company}
//                   onChange={(e) => setCompany(e.target.value)}
//                 />
//                 <label htmlFor="" className="form__label">
//                   Via Chiesa
//                 </label>
//                 <div className="form__shadow"></div>
//               </div>
//               <div className="form__box">
//                 <input
//                   type="text"
//                   name="city"
//                   className="form__input"
//                   required
//                   placeholder="Città"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                 />
//                 <label htmlFor="" className="form__label">
//                   Stile Chiesa
//                 </label>
//                 <div className="form__shadow"></div>
//               </div>
//               <div className="form__box">
//                 <input
//                   type="email"
//                   name="email"
//                   className="form__input"
//                   required
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label htmlFor="" className="form__label">
//                   Email
//                 </label>
//                 <div className="form__shadow"></div>
//               </div>
//               <div className="form__box">
//                 <select
//                   className="form__inputSelect"
//                   name="position"
//                   id="position-select"
//                   required
//                   value={position}
//                   onChange={(e) => setPosition(e.target.value)}
//                 >
//                   <option value="" disabled>
//                     Seleziona posizione
//                   </option>
//                   <option value="dipendente">Dipendente</option>
//                   <option value="supervisore">Supervisore</option>
//                   <option value="amministrazione">Amministrazione</option>
//                   <option value="ceo">Ceo</option>
//                 </select>
//                 <div className="form__shadow"></div>
//               </div>
//               <div className="form__box">
//                 <select
//                   className="form__inputSelect"
//                   name="interessi"
//                   id="position-select"
//                   required
//                   value={hobby}
//                   onChange={(e) => setHobby(e.target.value)}
//                 >
//                   <option value="" disabled>
//                     Seleziona interessi
//                   </option>
//                   <option value="robotica">Robotica</option>
//                   <option value="IA">I.A.</option>
//                   <option value="Disposable">Disposable Product</option>
//                 </select>
//                 <div className="form__shadow"></div>
//               </div>
//               <div className="form__box">
//                 <select
//                   className="form__inputSelect"
//                   name="department"
//                   id="position-select"
//                   required
//                   value={department}
//                   onChange={(e) => setDepartment(e.target.value)}
//                 >
//                   <option value="" disabled>
//                     Seleziona dipartimento
//                   </option>
//                   <option value="Ricerca E Sviluppo">Ricerca e sviluppo</option>
//                   <option value="Ufficio Acquisti">Ufficio acquisti</option>
//                   <option value="Product Managment">Product Managment</option>
//                   <option value="Vendite">Vendite</option>
//                   <option value="Altro">Altro</option>
//                 </select>
//                 <div className="form__shadow"></div>
//               </div>
//               <div className="form__box">
//                 <select
//                   className="form__inputSelect"
//                   name="requestType"
//                   id="position-select"
//                   required
//                   value={requestType}
//                   onChange={(e) => setRequestType(e.target.value)}
//                 >
//                   <option value="" disabled>
//                     Seleziona richiesta
//                   </option>
//                   <option value="tecnica">Tecnica</option>
//                   <option value="commerciale">Commerciale</option>
//                 </select>
//                 <div className="form__shadow"></div>
//               </div>
//               <div className="form__boxArea">
//                 <textarea
//                   name="message"
//                   className="form__inputSelectArea"
//                   required
//                   placeholder="Scrivi il tuo messaggio"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <div className="form__shadow"></div>
//               </div>
//               <div className="form__button">
//                 <input
//                   type="submit"
//                   className="button__content1"
//                   value="invia"
//                 />
//               </div>
              
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TestForm;
