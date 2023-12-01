function Image({ uri }) {

    return (
        <img
            className="image"
            alt="JungleClothes"
            src={require(`../../assets/images/${uri}`)}
        />
    )

}

export default Image;