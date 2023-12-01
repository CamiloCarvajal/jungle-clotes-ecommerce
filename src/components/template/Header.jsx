import Categories from "../organisms/Categories";
import ToolsBar from "../organisms/ToolsBar";

export default function Header() {

    const categoriesList = [
        "Camisas",
        "Pantalones",
        "Zapatos",
        "Gorras"
    ]

    return (
        <div className="header">
            <ToolsBar />
            <Categories categoriesList={
                [
                    "Camisas",
                    "Pantalones",
                    "Zapatos",
                    "Gorras"
                ]
            }/>
        </div>
    )

}