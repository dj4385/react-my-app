import { Navigate } from "react-router-dom";
import { STORAGEENUM } from "../models/enums"
import { LocalStorageService } from "../services/LocalStorage"
import { NotifierService } from "../services/Notifier";

const PrivateRoute = ({children}: any) => {
    const token: string | null = LocalStorageService.getItem(STORAGEENUM.token);
    const userInfo: string | null = LocalStorageService.getItem(STORAGEENUM.user)

    if(!token) {
        NotifierService.showError({
            message: 'Please login'
        })
        LocalStorageService.clearItem();
        return <Navigate to={"/"} />
    }

    if(token && userInfo) {
        const user = JSON.parse(userInfo);
        const {exp} = user;
        if(Date.now() > (exp * 1000)) {
            NotifierService.showError({
                message: 'Token Expire, Please login'
            })
            LocalStorageService.clearItem();
            return <Navigate to={"/"} />    
        }
    }


    return children;
}

export default PrivateRoute;
