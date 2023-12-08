function Image({ uri }) {

    return (
        <img
            className="image"
            alt={uri}
            src={require(`../../assets/images/${uri}`)}
        />
    )

}

export default Image;