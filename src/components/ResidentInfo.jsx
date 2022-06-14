import useGetCharacter from "../hooks/useGetCharacter"

const ResidentInfo = ({resident}) => {
    const character=useGetCharacter(resident)

    const statusStyle= ()=>{
        if (character?.status==="Alive"){
            return {backgroundColor:"#5cb85c"}
            }
        else if (character?.status==="Dead"){
            return {backgroundColor:"#F50E3F"}
        }

        else if (character?.status==="unknown"){
            return {backgroundColor:"#636060"}
        }

        
    }
  return (
    
        <article className='card__component'>
        <div>
            <img src={character?.image} alt="character" />
        </div>
        <div>{character?.name}</div>
        <div><span>Status:</span>{character?.status}</div> 
        <div className='status__style' style={statusStyle()}></div>
        <div><span>Origin:</span> {character?.origin.name}</div>
        <div><span>Episodes where appear: </span>  {character?.episode.length} </div>
        </article>
  
    
  )
}

export default ResidentInfo