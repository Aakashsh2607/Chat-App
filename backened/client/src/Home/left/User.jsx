import React from "react";
import useConversation from "../../statemanage/useConverstaion.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
             <img src="https://th.bing.com/th/id/OIP.Y2Z1sJCl2BKT65eecD0cQwAAAA?w=310&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"/>
        
          </div>
        </div>
        <div>
          <h1 className=" font-bold">{user.name}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;