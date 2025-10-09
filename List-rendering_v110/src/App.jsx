import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "first todo",
      desc: "first todo desc"
    },
    {
      title: "second todo",
      desc: "second todo desc"
    },
    {
      title: "third todo",
      desc: "third todo desc"
    }
  ])

  // const Todo = ({todo})=>{
  //   return (<>
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </>)
  // }

  return (
    <>
      
      {showbtn? <button>showbtn is True</button> : <button>showbtn is False</button> } 
          {/* way one of rendering if we want to show something based on condition */}


      {/* {showbtn && <button>It will be shown only when count button is clicked.</button>} */}
          {/* second way of rendering if we dont want to render something that is based on condition but one of them is true. */}

      {todos.map(todo=>{
        // return <Todo todo={todo}/>
        return <div key={todo.title} className="m-4 border-1 border-purple-400">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      })}
      <div className="card">
        <button onClick={() => setShowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs bg-blue-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
