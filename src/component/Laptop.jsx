import React from 'react'
import { laptops} from '../data'

function Laptop() {
  return (
    <>
      {laptops.map((value) => {

        return (
          <>
            <h1>id:{value.id}</h1>
            <h1>brand:{value.brand}</h1>
            <h1>model:{value.model}</h1>
            <h1>price:{value.price}</h1>
            <h1>ram:{value.ram}</h1>

            <hr />
          </>

        )
      })}

      
    </>
  )
}

export default Laptop