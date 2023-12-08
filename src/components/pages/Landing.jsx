// import "../../assets/css/landing.css" 
// averiguar para que los estilos puedan ponerse desde aca

import { useEffect, useState } from "react";
import Footer from "../template/Footer";
import Header from "../template/Header";
import ProductList from "../template/ProductList";

export default function Landing() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productDetail, setProductDetail] = useState([]);
    const [searchFilter, setSearchFilter] = useState("");

    const endpointAllProducts = 'https://fakestoreapi.com/products?limit=50';
    const endpointCategories = "https://fakestoreapi.com/products/categories";


    useEffect(() => {
        fetch(endpointAllProducts)
            .then(res => res.json())
            .then(list => setProducts(list))

        fetch(endpointCategories)
            .then(res => res.json())
            .then(categoriesList => setCategories(categoriesList))

    }, [])


    return (
        <>
            <Header categoriesList={categories} filter={setSearchFilter} />
            <a href="volver" onClick={console.log("return")}> {"< Regresar"} </a>
            <ProductList products={products} />
            <Footer />
        </>
    )
}