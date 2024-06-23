import { useState } from 'react'

import AppDragItemsList from './apps/AppDragItemsList'
import './App.css'

function App() {
  const [listElements, setListElements] = useState([
    {'id': 0, 'name': 'Sara Conor', 'edad': 21},
    {'id': 1, 'name': 'Raimundo Gonzalez', 'edad': 22},
    {'id': 2, 'name': 'Zulema Castillo', 'edad': 23},
    {'id': 3, 'name': 'Omar Perez', 'edad': 24},
    {'id': 4, 'name': 'Zayda Castillo', 'edad': 25},
    {'id': 5, 'name': 'Tomas Barcenas', 'edad': 26},
    {'id': 6, 'name': 'Mario Casas', 'edad': 27},
  ])

  return (
    <>
      <h1>Lista de Prueba</h1>
      <div>
        <AppDragItemsList 
          list={listElements} 
          setList={setListElements} 
          renderItem={ (item) => <span className='item-list'>{item.name}</span> }
        />
      </div>  
    </>
  )
}

export default App
