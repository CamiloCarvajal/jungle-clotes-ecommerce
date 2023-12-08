import Image from "../atoms/Image";
import SearchInput from "../atoms/SearchInput";
import { getProductByName } from '../../assets/js/Utils'


export default function SearchBar({ filter, filterValue, productList, newProductList }) {

    return (
        <div className="search-bar">
            <SearchInput
                filter={filter}
            />
            <div
                className="search-button"
                onClick={() => newProductList(getProductByName(filterValue, productList))}
            >
                <Image
                    uri="search.png"
                    filterValue={filterValue}
                    productList={productList}
                    newProductList={newProductList}
                />

            </div>
        </div>
    )
}