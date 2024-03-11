import { configureStore } from "@reduxjs/toolkit"
import StoreSlice from "./StoreSlice"

const Store = configureStore({
    reducer : {
     Fetch : StoreSlice
    }
})
export default Store