
const CardTeam = ({ fotoCard, nameCard, description }) => {
  return (
    <>
      <div className="team">
        <img className="teamImage" src={fotoCard} alt="Teams"></img>
        <h2 className="nameTeam">{nameCard}</h2>
        <p className="aboutTeam">{description}</p>
      </div>
    </>
  );
};
export default CardTeam;
