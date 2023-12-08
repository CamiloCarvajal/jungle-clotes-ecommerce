
export function getProductByName(name, listProduct) {

    let lista =  listProduct.filter((product) =>
        product.title.includes(name)
    )

    return lista
}