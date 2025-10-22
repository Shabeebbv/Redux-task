import { createSlice } from "@reduxjs/toolkit";


const sliceValue=createSlice({
    name:'value',
    initialState:0 ,
    reducers:{
        increment:(state,action)=>{
            return state+1
        },
        decrement:(state,action)=>{
            return state-1
        }
    }
})

export  const {increment,decrement}=sliceValue.actions
export const slice= sliceValue.reducer
