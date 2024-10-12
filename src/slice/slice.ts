import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "name",
    initialState: false,
    reducers: {
        setState: (state) => {
            state != state
        }
    }
})

export const { setState } = slice.actions
export default slice.reducer