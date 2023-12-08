import Categories from "../organisms/Categories";
import ToolsBar from "../organisms/ToolsBar";

export default function Header({categoriesList, filter}) {

    return (
        <div className="header">
            <ToolsBar filter={filter}/>
            <Categories categoriesList={categoriesList}/>
        </div>
    )

}