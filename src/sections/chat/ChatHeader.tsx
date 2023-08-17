import React from 'react'
import { IChatHeader } from '../../models/sections/IChatHeader'

const ChatHeader = ({
    user
}: IChatHeader) => {
  return (
    <div className="bg-primary text-white p-2 mb-2">
        {user?.email}
    </div>
  )
}

export default ChatHeader