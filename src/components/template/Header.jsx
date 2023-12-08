import Categories from "../organisms/Categories";
import ToolsBar from "../organisms/ToolsBar";

export default function Header({categoriesList}) {

    console.log(categoriesList)

    return (
        <div className="header">
            <ToolsBar />
            <Categories categoriesList={categoriesList}/>
        </div>
    )

}