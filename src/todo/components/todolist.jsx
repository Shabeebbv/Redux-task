import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, dlttodo } from "../sliceReducer";

const Todolist=()=>{


const todos=useSelector((state)=>state.todo)
const [task,setTask]=useState("")
const dispatch=useDispatch()

const handleAdd=()=>{
    dispatch(addtodo(task))
    setTask('')
}
const handledlt=(id)=>{
    dispatch(dlttodo(id))
    setTask('')
}

return (
    <>
    <div><div><input type="text" value={task} placeholder="type todo.." onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleAdd}>Add</button></div>
        {todos.map((s)=><p key={s.id}>{s.text} <button onClick={()=>handledlt(s.id)}>Delete</button></p>)}
        
    </div>

    </>
)
}
export default Todolist