import { configureStore } from "@reduxjs/toolkit";
import dateReducer from './dateSlice.js'

const store = configureStore({
    reducer: {
        date: dateReducer,
    },
})

export default store;