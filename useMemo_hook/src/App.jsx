import { useState } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0)
  const [input, setInput] = useState(0)

  function expensiveTask(num){
    console.log("Inside Expensive Task")
    for(let i=0; i<=1000000000;i++){} // is loop ki wjha se entire process slow ho jata hai, yeh loop chlne k baad entire UI update hota hai
    return num*2
  }

  // let doubleValue = expensiveTask(input) //works slow.... har render pe yeh function dubara se call ho rha hai

  let doubleValue = useMemo(() => expensiveTask(input), [input]) // let suppose input ki value 3 hai toh voh expensive function call hoga 1 baar, agr fir input me 3 aagya toh func call nhi hoga kyuki already input 3 ki value memeory me calculated pdi hai

  return (
    <>
     <button onClick={()=>setcount(count+1)}>Click</button>
     <div>count: {count}</div>
     <input type="number" placeholder='Enter number' value={input} 
     onChange={(e)=> setInput(e.target.value)} /> 
      {/* jab bhi input box me value change hogi toh input ki value bhi change ho jayegi */}
     <div>Double: {doubleValue}</div>

    </>
  )
}

export default App
