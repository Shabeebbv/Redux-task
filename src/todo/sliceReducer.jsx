import { createSlice } from "@reduxjs/toolkit";

const sliceReducer=createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addtodo:(state,action)=>{
        state.push({
            id:Date.now(),
            text:action.payload
        })
    },
    edittodo:(state,action)=>{
        const{id,newtxt}=action.payload
        const todo=state.find((e)=>id===e.id)
        if(todo){
            e.text=newtxt
        }
    },
    dlttodo:(state,action)=>{
        return state.filter((t)=>t.id!==action.payload)
    }
}

})
export const slice=sliceReducer.reducer
export const {addtodo,edittodo,dlttodo}=sliceReducer.actions