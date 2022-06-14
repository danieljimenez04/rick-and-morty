const ButtonById = ({setSearchLocation}) => {
  
  const onSubmitFunction = e =>{
    const inputValue=Number(e.target.firstChild.value)
    if (inputValue && (typeof inputValue=== "number") && ((inputValue>=1))&&(inputValue<=126)) {
      e.preventDefault()
      setSearchLocation(inputValue)
    } else{
      //solo ejecutará cambiará el estado si se escribe contenido en el input
      //evita que se recargue
      e.preventDefault()
      alert("Send a number between 1-126")
      
     
    }
    
  }
  
  return (
    <div className="form">
      <form onSubmit={onSubmitFunction}  className="form__component">
        <input type="text" placeholder="type a location id"/>
        <button>Search</button>
      </form>
    </div>

  )
}

export default ButtonById