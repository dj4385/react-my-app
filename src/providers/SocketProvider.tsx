import { io } from "socket.io-client";
import { SocketContext } from "../context/Context";
import { URLS } from "../constants";

export const SocketProvider = ({children}: any) => {
    const socket: any = io(URLS.SOCKET_URL,{
        transports: ['websocket', 'polling']
    })

    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}
