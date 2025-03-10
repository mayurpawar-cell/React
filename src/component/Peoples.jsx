import React from 'react'
import { people } from '../data'

function Peoples() {
  return (
    <>
      {people.map((value) => {

        return (
          <>
            <h1>id:{value.id}</h1>
            <h1>name:{value.name}</h1>
            <h1>age:{value.age}</h1>
            <h1>email:{value.email}</h1>
            <hr />
          </>

        )
      })}

      
    </>
  )
}

export default Peoples