import CartShop from "../molecules/CartShop";
import Logo from "../molecules/Logo";
import SearchBar from "../molecules/SearchBar";

export default function ToolsBar(params) {
    return (
        <div className="tools-bar">
            <Logo/>
            <SearchBar/>
            <CartShop/>
        </div>
    )
}