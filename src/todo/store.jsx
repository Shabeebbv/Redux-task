import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./sliceReducer";

const store=configureStore({
    reducer:{
        todo:slice
    }

})
export default store