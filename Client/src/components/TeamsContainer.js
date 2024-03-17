import CardTeam from "./CardTeam"
import foto1 from "../assets/img/Nonno.jpg";

const TeamsContainer = () => {
    return (
        <div className="productsContainer">
            <CardTeam
                nameCard="Crocchè"
                fotoCard={foto1}
                description="Ingredienti"
            />
            <CardTeam
                nameCard="Panelle"
                fotoCard={foto1}
                description="Ingredienti"
            />
            <CardTeam
                nameCard="Panelle"
                fotoCard={foto1}
                description="Ingredienti"
            />
        </div>
    )
}
export default TeamsContainer