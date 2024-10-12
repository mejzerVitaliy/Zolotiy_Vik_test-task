import { configureStore } from "@reduxjs/toolkit";
import { slice } from "../slice/slice";

export const store = configureStore({
    reducer: {
        name: slice.reducer
    }
    // middleware:
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;