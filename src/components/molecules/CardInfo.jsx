import CardImage from "../atoms/CardImage";
import CardTitle from "../atoms/CardTitle";

export default function CardInfo({product}) {


    const {rating : {rate} } = product;

    return (
        <div className="card-info">
            <CardImage name={product.title} url={product.image}/>
            <CardTitle title={product.title}/>
            <div className="product-info">
                {/* <p>{product.description}</p> */}
                <p>{product.price}</p>
                <p>Calificación: <span>{rate}</span></p>
            </div>

        </div>
    )
}