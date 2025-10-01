import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className="pl-5 pt-5 h-[12vh] flex items-center space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
      {/* Avatar */}
      <div className="avatar">
        <div className="w-14 rounded-full">
          <img
            src={
              selectedConversation?.profilePic ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="User Avatar"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="flex flex-col justify-center">
        <h2 className="text-white font-semibold text-lg">
          {selectedConversation?.username || "Select a user"}
        </h2>
        <span
          className={`text-sm font-medium ${
            getOnlineUsersStatus(selectedConversation?._id) === "Online"
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {getOnlineUsersStatus(selectedConversation?._id)}
        </span>
      </div>

      {/* Menu Icon (right side) */}
      <div className="ml-auto pr-5 cursor-pointer text-white text-2xl">
        <CiMenuFries />
      </div>
    </div>
  );
}

export default Chatuser;
