import React from 'react'
import { cars } from '../data'

function Car() {
  return (
    <>
      {cars.map((value) => {

        return (
          <>
            <h1>id:{value.id}</h1>
            <h1>brand:{value.brand}</h1>
            <h1>model:{value.model}</h1>
            <h1>year:{value.year}</h1>
            <h1>type:{value.type}</h1>

            <hr />
          </>

        )
      })}

      
    </>
  )
}

export default Car