import Category from "../atoms/Category"

export default function CategoriesList({ categoriesList }) {

    return (

        <>
            {
                categoriesList.map(
                    (category, idx) => (
                        <div key={idx}>
                            <Category category={category} />
                        </div>
                    )
                )
            }
        </>

    )
}