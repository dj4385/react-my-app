import React from 'react'
import { IChatMessages } from '../../models/sections/IChatMessages';

const ChatMessages = ({
  user,
  messages
}: IChatMessages) => {
  return (
    <div className="bg-transparent h-[380px] max-h-[380px]">
      <div className=" bg-primary text-white flex flex-col w-[70%] rounded pl-5">
        <p className="text-sm">
          dheeraj
        </p>
        <p>
          Hi
        </p>
      </div>
    </div>
  )
}

export default ChatMessages;