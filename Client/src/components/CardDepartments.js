const Card = ({ fotoCard, description, href }) => {
  return (
    <>
      <div className="cardDepartment" id="about-us">
        <div className="fotoContDepartment">
          <a href={href}>
            {" "}
            <img className="fotoCardDepartment" src={fotoCard} alt=""></img>
          </a>
        </div>

        <div className="descriptionContDepartment">
          <p>{description}</p>{" "}
        </div>
      </div>
    </>
  );
};
export default Card;
