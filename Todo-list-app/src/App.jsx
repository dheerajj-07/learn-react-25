import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import {v4 as uuidv4} from 'uuid' // uuid is a component which is used to generate a unique id everytime it is called.

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => { // yeh useEffect ek baar chelga aur saare todos ko load krega
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) // agr todo String null nhi hai tab aisa krenge
      setTodos(todos)

    }
  }, [])
  
  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos)) //function to save todos to local storage
  }
  const toggleFinished = (e)=>{
    setshowFinished(!showFinished)
  }

  const handleEdit = (e,id) => {
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)

    let newTodos = todos.filter(item=>{
      return item.id!==id
      }); 
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let conf = confirm("Are you sure you want to delete? ");
    if (conf){
      let newTodos = todos.filter(item=>{
      return item.id!==id
      }); 
    setTodos(newTodos)
    }
    saveToLS()

  }
  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}]);
    setTodo("");
    console.log(todos)
    saveToLS()
  } 
  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  const handleCheckbox = (e)=>{
    let id= e.target.name; // yeh id hai jiska inputbox ka checkbox checked hai.. us inputbox ke content ko linethrough kr dega. is completed ko true krna hai
    let index= todos.findIndex(item=>{ //find index ek function leta hai aur voh function ka kaam yeh hai ki. jo bhi ek phela item milega aisa jo ki is creteria ko specify kre
      return item.id === id;
    })
    let newTodos = [...todos]; // abb index ko change krenge, aur newTodos ek nya array hai
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-6 rounded-xl p-5 bg-violet-200 min-h-[80vh] box-border">
        <div className="addTodo">
          <h2 className='text-lg font-semibold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='bg-slate-100 rounded-s-2xl p-2 min-w-[65vw] justify-between ml-5 '/>
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-500 rounded-r-2xl p-2 px-6 cursor-pointer disabled:bg-slate-600 disabled:cursor-not-allowed min-w-[7vw]'>Save</button>
        </div>
        <input type="checkbox" onChange={toggleFinished} checked={showFinished} className='ml-6 m-3 cursor-pointer'/>Show Finished
        <h2 className='text-xl font-semibold'>Your Todos</h2>
        
        <div className="todos">
          {todos.length ===0 && <div className='todo flex justify-between m-5 bg-slate-100 p-3 rounded-2xl text-xl'>No Todo to display</div>}
          {todos.map(item=>{
        
        return (showFinished || !item.isCompleted)&&<div key={item.id} className="todo flex justify-between m-5 bg-slate-100 p-3 rounded-2xl overflow-auto ">
          <div className='flex gap-5 my-auto'>
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" className='cursor-pointer' />
            <div className={item.isCompleted?"line-through":""}>
              {item.todo}
            </div>

          </div>
          <div className="buttons flex gap-5 mx-5 h-full">
            <button onClick={(e)=>{handleEdit(e, item.id)}} className='bg-violet-500 rounded-xl p-2 px-6 cursor-pointer'>Edit</button>
            <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-500 rounded-xl p-2 px-6 cursor-pointer'>Delete</button>
          </div>
        </div>
        })}
        </div>
      </div>
    </>
  )
}

export default App
