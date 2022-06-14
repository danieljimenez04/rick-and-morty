import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Location from './components/Location'
import ButtonById from './components/ButtonById'
import useGetLocation from './hooks/useGetLocation'
import ResidentInfo from './components/ResidentInfo'

const RickAndMorty = () => {
    const [searchLocation, setSearchLocation] = useState()
    const location=useGetLocation(searchLocation)
    

    return (
      <div className="main__component">
        <h1>Rick and Morty wiki</h1>
        <div className='header'>
          <img src="https://poptv.orange.es/wp-content/uploads/sites/3/2018/03/Rick-and-Morty-3p-1600x900.jpg" alt="rick-and-morty" />
        </div>
        <ButtonById setSearchLocation={setSearchLocation}/>
        <Location location={location}/>
        
        <div className='card-container'>
          {
            location?.residents.map(resident=>
              (
                <ResidentInfo
                  key={resident}
                  resident={resident}
                className="card"/>
              )
              )
          }
        </div>
        
      </div>
    )
}

export default RickAndMorty