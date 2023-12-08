
export function getProductByName(name, listProduct) {

    return listProduct.filter((product) =>
        product.title.contains(name)
    )

}