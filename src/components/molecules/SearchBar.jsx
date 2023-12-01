import Image from "../atoms/Image";
import SearchInput from "../atoms/SearchInput";

export default function SearchBar(params) {

    return (
        <div className="search-bar">
            <SearchInput/>
            <Image uri="search.png"/>
        </div>
    )
}