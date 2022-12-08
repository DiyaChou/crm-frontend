import React from "react";
import "./MessageHistory.style.css";

const MessageHistory = ({ msg }) => {
  if (!msg) return null;

  return (
    <div>
      {msg.map((item, i) => {
        return (
          <div key={i} className="history__block">
            <div className="history__send">
              <div className="sender">{item.sender}</div>
              <div className="date">
                {item.msgAt && new Date(item.msgAt).toLocaleString()}
              </div>
            </div>
            <div className="history__message">{item.message}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageHistory;
