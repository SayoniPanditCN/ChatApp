import React from 'react'
import Input from './Input'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className='Chat'>
      <div className="ChatInfo">
        <span>Sayoni</span>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat