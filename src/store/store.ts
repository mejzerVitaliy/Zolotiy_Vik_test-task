import { configureStore } from "@reduxjs/toolkit";
import { getUsers } from "../api/getUsers";
import { loaderSlice } from "../slice/loaderSlice";

export const store = configureStore({
    reducer: {
        [getUsers.reducerPath]: getUsers.reducer, 
        loader: loaderSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getUsers.middleware), 
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;