const Card = ({ fotoCard, titleCard, description }) => {
  return (
    <>
      <div className="card" id="about-us">
        <div className="fotoCont">
          <img className="fotoCard" src={fotoCard} alt=""></img>
        </div>
        <div className="descriptionCont">
          <h2>{titleCard}</h2> <p>{description}</p>{" "}
        </div>
      </div>
    </>
  );
};
export default Card;
