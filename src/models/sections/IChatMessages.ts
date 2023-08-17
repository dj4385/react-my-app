import { IMessage } from "../IMessage";
import { IUser } from "../IUser";

export interface IChatMessages {
    messages: IMessage,
    user: IUser | null
}

export interface ISendMessageForm {
    message: string
}