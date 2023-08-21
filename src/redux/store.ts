import { configureStore } from "@reduxjs/toolkit";
import { User_State } from "./reducer/User_State";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UserIP_State } from "./reducer/UserIP_State";

export const store = configureStore({
    reducer: {
        "User_State": User_State.reducer,
        "UserIP_State": UserIP_State.reducer
    }
})


export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;