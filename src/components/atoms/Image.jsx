function Image({ uri}) {

    return (
        <img
            className="image"
            alt={uri}
            src={require(`../../assets/images/${uri}`)}
            onClick={(e) => console.log(e)}
        />
    )

}

export default Image;