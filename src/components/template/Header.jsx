import Categories from "../organisms/Categories";
import ToolsBar from "../organisms/ToolsBar";

export default function Header({ categoriesList, filter, filterValue, productList, newProductList }) {

    return (
        <div className="header">
            <ToolsBar
                filter={filter}
                filterValue={filterValue}
                productList={productList}
                newProductList={newProductList}
            />
            <Categories categoriesList={categoriesList} />
        </div>
    )

}