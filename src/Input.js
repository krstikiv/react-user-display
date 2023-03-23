const Input = ({ searchTerm, onInputChange}) => {

    return (
        <input 
      value={searchTerm}
      onChange={(event) => onInputChange(event.target.value)} 
      className="search-input"     
      />
    )

}

export default Input