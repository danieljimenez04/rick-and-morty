const Location = ({location}) => {
  return (
    <div className='location'>
      <div className='location__component'>
        <div>
          <h2>{location?.name}</h2>
        </div>
        <div><span>type:</span> {location?.type}</div>
        <div><span>dimension:</span> {location?.dimension}</div>
        <div><span>population:</span> {location?.residents.length}</div>

      </div>
    </div>
    
  )
}

export default Location