import React from 'react'
import { countries } from '../data'

function Countrie() {
  return (
    <>
      {countries.map((value) => {

        return (
          <>
            <h1>id:{value.id}</h1>
            <h1>name:{value.name}</h1>
            <h1>capital:{value.capital}</h1>
            <h1>population:{value.population}</h1>
            <h1>continent:{value.continent}</h1>

            <hr />
          </>

        )
      })}

      
    </>
  )
}

export default Countrie