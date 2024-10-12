import { configureStore } from "@reduxjs/toolkit";
import { getUsers } from "../api/getUsers";

export const store = configureStore({
    reducer: {
        [getUsers.reducerPath]: getUsers.reducer, // Подключение редюсера
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getUsers.middleware), // Подключение middleware
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;