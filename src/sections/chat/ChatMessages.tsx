import React from 'react'
import { IChatMessages } from '../../models/sections/IChatMessages';
import { IMessage } from '../../models/IMessage';

const ChatMessages = ({
  user,
  messages
}: IChatMessages) => {
  return (
    <div className="bg-transparent h-[380px] max-h-[380px] overflow-x-auto">
      {
        messages && messages.length ? messages.map((message: IMessage, index: number) =>  (
          <div className=" bg-primary text-white flex flex-col w-[70%] rounded pl-5 my-5 mx-1" key={index}>
            <p className="text-sm">
              {message.email}
            </p>
            <p>
              {message.message}
            </p>
          </div>
        )): null
      }
      
    </div>
  )
}

export default ChatMessages;