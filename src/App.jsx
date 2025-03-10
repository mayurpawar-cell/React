import React from 'react'
import Peoples from './component/Peoples'
import Smartphone from './component/Smartphone'
import Laptop from './component/Laptop'
import Car from './component/Car'
import Planet from './component/Planet'
import Countrie from './component/Countrie'


import { people } from './data'
// import { cars} from './data'
// import { planets } from './data'
// import { smartphone } from './data'
// import { laptops } from './data'

function App() {
  return (
    <>
      <Props/>
      <hr />
      <Navbar/>
      <hr />
      <Button/>
      <hr/>
      {people.map((e) => {
        console.log(e)
        return <Peoples id={e.id} name={e.name} age={e.age} email={e.email} />
      })}

      <hr/>

      <div>
      <h1>Smartphone List</h1>
      <Smartphone />
    </div>

    <hr/>

    <div>
      <h1>Laptop List</h1>
      <Laptop />
    </div>

    <hr/>

    <div>
      <h1>Car List</h1>
      <Car/>
    </div>

    <hr/>

<div>
  <h1>Countrie List</h1>
  <Countrie/>
</div>

    <hr/>
    <div>
      <h1>planet List</h1>
      <Planet/>
    </div>


    </>
  )
}

export default App
