import { createSlice } from "@reduxjs/toolkit";

const initialState: { isLoader: boolean } = {
    isLoader: false
}

export const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        setIsLoader: (state) => {
            state.isLoader != state.isLoader
        }
    }
})

export const { setIsLoader } = loaderSlice.actions
export default loaderSlice.reducer