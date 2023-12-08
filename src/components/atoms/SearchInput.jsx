export default function SearchInput({filter}) {
    return (
        <input 
        className="search-input"
        placeholder="Busca tu producto favorito"
        onKeyUp={(e) => filter(e.target.value)}/>
    )
}