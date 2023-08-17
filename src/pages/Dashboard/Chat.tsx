import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../context/Context";
import { LocalStorageService } from "../../services/LocalStorage";
import { STORAGEENUM } from "../../models/enums";
import { SOCKETROOM } from "../../constants";
import ChatHeader from "../../sections/chat/ChatHeader";
import ChatMessages from "../../sections/chat/ChatMessages";
import SendMessage from "../../sections/chat/SendMessage";
import { IUser } from "../../models/IUser";

const Chat = () => {

    const [messages, setMessages] = useState<any>([]);
    const [user, setUser] = useState<IUser | null>(null);
    const socket: any = useContext(SocketContext);

    const sendMessage = (message: string) => {
        socket.emit("sendMessage", {
            message,
            email: user?.email,
            room: SOCKETROOM,
            user_id: user?.user_id
        })
    }

    useEffect(() => {
        const userInfo: string | null = LocalStorageService.getItem(STORAGEENUM.user);
        const user = userInfo ? JSON.parse(userInfo) : null;
        setUser(user);
        console.log(user, socket)
        socket.on('joinRoom', {
            email: user.email,
            room: SOCKETROOM,
            user_id: user.user_id
        })

        socket.on("message", (data: any) => {
            console.log('message', data);
            setMessages([...messages, data])
        })
    }, [socket])

    return (
        <div className="container border-2 rounded-lg border-primary shadow-lg"> 
            <ChatHeader user={user} />
            <ChatMessages user={user} messages={messages}/>
            <SendMessage sendMessage={sendMessage} />
        </div>
    );
}

export default Chat;
