
const Card1 = ({ fotoCard, nameCard}) => {
  return (
    <>
      <div className="products">
        <img className="productsImage" src={fotoCard} alt="Teams"></img>
        <h2 className="nameCard">{nameCard}</h2>
      </div>
    </>
  );
};
export default Card1;
