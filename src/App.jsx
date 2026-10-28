import { useState } from 'react'
import './App.css'
import Timer from './timer'



function App() {
  const[showTimer,setShowTimer]=useState(false);
  const [count, setCount] = useState(0)

  return (

    <>
    <h1>LOCK-IN TIMER</h1>

   <button onClick={()=>setShowTimer(true)}>press</button>
   


   {showTimer&&<Timer/>}

    </>
  )
}

export default App;
