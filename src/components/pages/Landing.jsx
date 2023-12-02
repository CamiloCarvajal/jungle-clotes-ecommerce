// import "../../assets/css/landing.css" 
// averiguar para que los estilos puedan ponerse desde aca

import { useEffect, useState } from "react";
import Footer from "../template/Footer";
import Header from "../template/Header";
import Card from "../organisms/Card";

export default function Landing() {

    const [products, setProducts] = useState([]);
    const [productDetail, setProductDetail] = useState([]);

    const allProducts = 'https://fakestoreapi.com/products'


    useEffect(() => {
        fetch(allProducts)
            .then(res => res.json())
            .then(list => setProducts(list))

    }, [])


    return (
        <>
            <Header />
            <a href="volver" onClick={console.log("return")}> {"< Regresar"} </a>
            <div className="product-list">
            {
                products.map((item, idx) => {
                    return <Card product={item} />
                })
            }
            </div>
            <Footer />
        </>
    )
}