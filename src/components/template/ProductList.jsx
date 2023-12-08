import Card from "../organisms/Card"

export default function ProductList({products}){
    return (
        <div className="product-list">
        {
            products.map((item, idx) => {
                return <Card product={item} />
            })
        }
        </div>
    )
}