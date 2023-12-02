export default function CardImage({ name, url }) {

    return (
        <img className="card-image" src={url} alt={name} />
    )

}