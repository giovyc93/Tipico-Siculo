import CardProducts from "./CardProducts"
import Wrench from "../assets/img/wrench.png";
import Oil from "../assets/img/oil.png";

const ProductContainer = () => {
    return (
        <div className="productsContainer">
            <CardProducts
                nameCard="Crocchè"
                fotoCard={Wrench}
            />
            <CardProducts
                nameCard="Crocchè"
                fotoCard={Oil}
            />
            <CardProducts
                nameCard="Crocchè"
                fotoCard={Wrench}
            />
        </div>
    )
}
export default ProductContainer