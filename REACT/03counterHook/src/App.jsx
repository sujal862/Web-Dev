// changes in react is propagated/done using Hooks i.e ui ma changes krna 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  /*using one of the method of hooks -> | useState | useState is function that returns a array containing two elements
   ->counter ak variable ha jiski default value 15 set ha
  and setCounter ak function ha jo ki responsible ha counter ki value update krna ka lia
  */
  const [counter, setCounter] = useState(15) 

    //let counter = 15

    const addValue = () => {
      setCounter(counter+1); //updation of counter
    }

    const removeValue = ()=>{
      setCounter(counter -1); 
    }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter Value : {counter}</h2>

     <button
     onClick={addValue}>
      AddValue</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
      <p>footer</p>
    </>
  )
}

export default App
