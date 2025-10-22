import { configureStore } from "@reduxjs/toolkit";
import { slice } from "../sliceReducer/sliceReducer";
const store=configureStore({
    reducer:{
        value: slice
    }
})
export default store