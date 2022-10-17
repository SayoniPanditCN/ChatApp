import React from "react";
import img from "../Images/Img.jpg"

const Chats = () => {
  return (
    <div className="Chats">
      <div className="UserChat">
        <img src={img} alt="" />
        <div className="UserChatInfo">
          <span>Sayoni</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="UserChat">
        <img src={img} alt="" />
        <div className="UserChatInfo">
          <span>Sayoni</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="UserChat">
        <img src={img} alt="" />
        <div className="UserChatInfo">
          <span>Sayoni</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
