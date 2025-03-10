import React from 'react'
import { planets } from '../data'

function Planet() {
  return (
    <>
      {planets.map((value) => {

        return (
          <>
            <h1>id:{value.id}</h1>
            <h1>name:{value.name}</h1>
            <h1>distance_from_sun:{value.distance_from_sun}</h1>
            <h1>type:{value.type}</h1>
            <hr />
          </>

        )
      })}

      
    </>
  )
}

export default Planet