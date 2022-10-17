import React from 'react'
import img from "../Images/Img.jpg"

const Message = () => {
  return (
    <div className='Message owner'>
        <div className="MessageInfo">
            <img src={img} alt="img"/>
            <span>Just now</span>
        </div>
        <div className="MessageContent">
            <p>Hello</p>
            <img src={img} alt=""/>
        </div>
    </div>
  )
}

export default Message