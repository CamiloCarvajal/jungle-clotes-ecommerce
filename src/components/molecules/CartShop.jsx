import Image from "../atoms/Image";

export default function CartShop() {

    const path = "shopping_cart.png"

    return (
        <div className="cart">
            <Image uri={path} />
        </div>
    )
}