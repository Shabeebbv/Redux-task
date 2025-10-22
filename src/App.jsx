<<<<<<< HEAD
import Todolist from "./todo/components/todolist"


function App() {

  return (
    <>
    <h1>Todo List</h1>
      <Todolist/>
=======
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement } from "./sliceReducer/sliceReducer"

function App() {

  const value=useSelector((state)=>state.value)
  const dispatch=useDispatch()


  return (
    <>
    <h2>{value}</h2>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
>>>>>>> ab592bba4604d79ab41e24c17b75427df9c2b41c
    </>
  )
}

export default App
