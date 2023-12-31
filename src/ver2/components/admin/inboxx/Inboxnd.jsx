import React, { useState } from "react";
import { FaMobile, FaChevronRight } from "react-icons/fa";
import { RiMore2Fill } from "react-icons/ri";
import { FaCoffee } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
const Inboxnd = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello", sender: "user" },
    { id: 2, text: "Hi there!", sender: "other" },
    { id: 3, text: "How are you?", sender: "user" },
    // Thêm các tin nhắn khác nếu cần
  ]);

  const sendMessage = (text) => {
    const newMessage = { id: messages.length + 1, text, sender: "user" };
    setMessages([...messages, newMessage]);
  };
  return (
    <div className="message-container w-50 mt-2 mx-3">
        <div className="w-100 cls">
        <div className="inbox-user-td w-100">
        <div className="td-img d-flex gap-2">
          <img src="logo192.png" alt="" />
          <div className="inbox-user-td-nd">
            <h3>Alexandra Michu</h3>
            <p>Online</p>
          </div>
        </div>

        <div className="inbox-user-td-btgoi">
          <FaMobile />
          <FaChevronRight />
          <RiMore2Fill />
        </div>
      </div>
      <div className="message-window">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${
              message.sender === "user" ? "user" : "other"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container w-75">
        <input
          className="inputnhan"
          type="text"
          placeholder="Type your message..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              sendMessage(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <FaCoffee />
        <FaPaperPlane />
      </div>
        </div>
    
    </div>
  );
};

export default Inboxnd;
