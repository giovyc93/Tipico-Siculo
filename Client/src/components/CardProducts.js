
const Card1 = ({ fotoCard, nameCard, description }) => {
  return (
    <>
      <div className="products">
        <img className="productsImage" src={fotoCard} alt="Teams"></img>
        <h2 className="nameCard">{nameCard}</h2>
        <p className="aboutCard">{description}</p>
      </div>
    </>
  );
};
export default Card1;
