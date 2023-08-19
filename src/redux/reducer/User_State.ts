import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface IUserState {
    user: IUser
}

const initialState: IUserState = {
    user: {
        email: '',
        exp: 0,
        user_id: ''
    }
}

export const User_State = createSlice({
    name: "User_State",
    initialState,
    reducers: {
        storeUser: (state: IUserState, action: PayloadAction<IUser>) => {
            state.user = action.payload
        } 
    }
})

export const { storeUser } = User_State.actions;
export default User_State.reducer;