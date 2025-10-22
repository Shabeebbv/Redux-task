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
    </>
  )
}

export default App
