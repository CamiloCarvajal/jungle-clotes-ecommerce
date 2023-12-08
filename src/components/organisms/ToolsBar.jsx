import CartShop from "../molecules/CartShop";
import Logo from "../molecules/Logo";
import SearchBar from "../molecules/SearchBar";

export default function ToolsBar({filter}) {
    return (
        <div className="tools-bar">
            <Logo/>
            <SearchBar filter={filter}/>
            <CartShop/>
        </div>
    )
}