import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'   /*  since card is a component we can use it like HTML */

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    name: 'chai',
    age: 22,
  }  

  return (
    <>
       <Card  username="chaiourcode" post="Manager" />  {/*  we can pass value here which will be stored in props in card.jsx  */}
       <Card  username="Hitesh" post="Team Head"/> 
    </>
  )
}

export default App
