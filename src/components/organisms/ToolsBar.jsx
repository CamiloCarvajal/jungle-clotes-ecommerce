import CartShop from "../molecules/CartShop";
import Logo from "../molecules/Logo";
import SearchBar from "../molecules/SearchBar";

export default function ToolsBar({ filter, filterValue, productList, newProductList }) {
    return (
        <div className="tools-bar">
            <Logo />
            <SearchBar
                filter={filter}
                filterValue={filterValue}
                productList={productList}
                newProductList={newProductList}
            />
            <CartShop />
        </div>
    )
}