export default function Category({category}) {

    const route = `/${category}`

    return (
            <a href={route}>{category}</a>
    )

}