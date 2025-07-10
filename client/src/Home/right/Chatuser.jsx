import React from "react";
import useConversation from "../../statemanage/useConverstaion.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

   }
console.log("Selected Conversation:", selectedConversation);
  return (
    <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://th.bing.com/th/id/OIP.Y2Z1sJCl2BKT65eecD0cQwAAAA?w=310&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
          </div>
        </div>
      </div>
      <div>

        <h1 className="text-xl">
        {selectedConversation?.name ||
          selectedConversation?.fullname ||
          selectedConversation?.email ||
          "User"}
      </h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );


export default Chatuser;
