/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import chat from "../../assets/img//BigChat.svg";

const Chat = () => {
  return (
    <div className="bigchaticon">
      <Link to="#">
        <img src={chat} alt="" />
      </Link>
    </div>
  );
};

export default Chat;
