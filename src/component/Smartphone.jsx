import React from 'react'
import { smartphone} from '../data'

function Smartphone() {
  return (
    <>
      {smartphone.map((value) => {

        return (
          <>
            <h1>id:{value.id}</h1>
            <h1>brand:{value.brand}</h1>
            <h1>model:{value.model}</h1>
            <h1>price:{value.price}</h1>
            <h1>storage:{value.storage}</h1>

            <hr />
          </>

        )
      })}

      
    </>
  )
}

export default Smartphone