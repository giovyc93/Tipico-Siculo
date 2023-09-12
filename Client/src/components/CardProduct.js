const CardProduct = ({ fotoCard, titleCard, description }) => {
  return (
    <>
      <div className="cardProduct" id="product">
        <div className="fotoContProduct">
          <img className="fotoCardProduct" src={fotoCard} alt=""></img>
        </div>
        <div className="descriptionContProduct">
          <h2>{titleCard}</h2> <p>{description}</p>{" "}
        </div>
      </div>
    </>
  );
};

export default CardProduct;
