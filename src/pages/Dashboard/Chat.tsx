import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../context/Context";
import { LocalStorageService } from "../../services/LocalStorage";
import { STORAGEENUM } from "../../models/enums";
import { SOCKETROOM } from "../../constants";
import ChatHeader from "../../sections/chat/ChatHeader";
import ChatMessages from "../../sections/chat/ChatMessages";
import SendMessage from "../../sections/chat/SendMessage";
import { IUser } from "../../models/IUser";
import useLiveChat from "../../hooks/useLiveChat";
import { useAppSelector } from "../../redux/store";

const Chat = () => {
    const { messages, sendMessage } = useLiveChat();
    // const [user, setUser] = useState<IUser | null>(null);
    const {user} = useAppSelector((store) => store.User_State);

    // const [messages, setMessages] = useState<any>([]);
    // const socket: any = useContext(SocketContext);

    const sendMessageToSocket = (message: string) => {
        sendMessage({
            message,
            email: user.email,
            room: SOCKETROOM,
            user_id: user.user_id,
            id: Date.now()
        })
    }

    // useEffect(() => {
    //     const userInfo: string | null = LocalStorageService.getItem(STORAGEENUM.user);
    //     const user = userInfo ? JSON.parse(userInfo) : null;
    //     setUser(user);
    // }, []);

    return (
        <div className="container border-2 rounded-lg border-primary shadow-lg"> 
            <ChatHeader user={user} />
            <ChatMessages user={user} messages={messages}/>
            <SendMessage sendMessage={sendMessageToSocket} />
        </div>
    );
}

export default Chat;
