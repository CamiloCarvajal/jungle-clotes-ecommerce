import CategoriesList from "../molecules/CategoriesList";

export default function Categories({categoriesList}) {

    return (
        <div className="categories-bar">
            <CategoriesList categoriesList={categoriesList} />
        </div>
    )

}