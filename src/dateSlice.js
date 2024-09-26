import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name: 'date',
    initialState: {
        startDate: null,
        endDate: null,
        recurrenceType: 'none',
        recurrenceOptions: {},
    },
    reducers: {
        setStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action) => {
            state.endDate = action.payload;
        },
        setRecurrenceType: (state, action) => {
            state.recurrenceType = action.payload;
        },
        setRecurrenceOptions: (state, action) => {
            state.recurrenceOptions = action.payload;
        },
    }
})

export const { setStartDate, setEndDate, setRecurrenceType, setRecurrenceOptions } = dateSlice.actions;
export default dateSlice.reducer