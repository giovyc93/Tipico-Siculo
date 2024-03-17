import CardProducts from "./CardProducts"
import CrocchettePatate from "../assets/img/Crocchette-patate.jpg";
import Panelle from "../assets/img/Panelle-1kg.jpg";

const ProductContainer = () => {
    return (
        <div className="productsContainer">
            <CardProducts
                nameCard="Crocchè"
                fotoCard={CrocchettePatate}
                description="Ingredienti"
            />
            <CardProducts
                nameCard="Panelle"
                fotoCard={Panelle}
                description="Ingredienti"
            />
            <CardProducts
                nameCard="Panelle"
                fotoCard={Panelle}
                description="Ingredienti"
            />
        </div>
    )
}
export default ProductContainer