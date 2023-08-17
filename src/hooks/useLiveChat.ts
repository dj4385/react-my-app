import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { SOCKETROOM, URLS } from "../constants";
import { IMessage } from "../models/IMessage";
import { STORAGEENUM } from "../models/enums";
import { LocalStorageService } from "../services/LocalStorage";

const useLiveChat = () => {

    const [messages, setMessages] = useState<IMessage[]>([]);
    const socketRef: any = useRef();
    
    useEffect(() => {
        socketRef.current = socketIOClient(URLS.SOCKET_URL, {
            transports: ['websocket', 'polling']
        });
        joinRoom();

        return () => {
			socketRef.current.disconnect();
		};
    }, [])

    socketRef?.current?.off("message");
    socketRef?.current?.on("message", receiveMessage);
	

    function joinRoom() {
        const userInfo: string | null = LocalStorageService.getItem(STORAGEENUM.user);
        const user = userInfo ? JSON.parse(userInfo) : null;
        if(user && user.toString() !== '{}') {
            socketRef.current.emit('joinRoom', {
                email: user.email,
                room: SOCKETROOM,
                user_id: user.user_id
            })
        }
    }

    function receiveMessage(arg: any) {
        console.log(arg);
        setMessages([...messages, arg]);
    }

    function sendMessage(data: IMessage) {
        socketRef.current.emit("sendMessage", data);
    }

    return {
        messages,
        sendMessage
    }

}

export default useLiveChat;
