import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUserIpInfo } from "../../models/response"

interface IUserIpInfoState {
    userIp: IUserIpInfo
}

const initialState: IUserIpInfoState = {
    userIp: {
        city: '',
        country: '',
        hostname: '',
        ip: '',
        loc: '',
        org: '',
        postal: '',
        region: '',
        timezone: ''
    }
}

export const UserIP_State = createSlice({
    name: 'UserIP_State',
    initialState,
    reducers: {
        storeUserIpInfo: (state: IUserIpInfoState, action: PayloadAction<IUserIpInfo>) => {
            state.userIp = action.payload;
        }    
    }
})

export const { storeUserIpInfo } = UserIP_State.actions;
export default UserIP_State.reducer;