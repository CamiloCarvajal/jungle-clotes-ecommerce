import CardInfo from "../molecules/CardInfo";

export default function Card({product}) {

    return (
        <div id={product.id} className="card-product">
            <CardInfo product={product}/>
        </div>
    )
}