import { useEffect, useState } from "react"
import axios from "axios"

const useGetLocation = (searchLocation) => {
    const [location, setLocation] = useState()
  
    useEffect(() => {
        let idNumber
        if (searchLocation===undefined){
            idNumber=Math.ceil((Math.random())*126)
            
        } else{
            idNumber=searchLocation
        }
        const URL=`https://rickandmortyapi.com/api/location/${idNumber}`
             axios.get(URL)
             .then(res=>setLocation(res.data))
             .catch(err=>console.log(err)) 
    }, [searchLocation])
    
  return location
}

export default useGetLocation