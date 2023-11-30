import React, { useState, useEffect } from "react";

const ChatWindow = (props: any) => {
  const [flipChat, setFlipChat] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlipChat(true)}
      onMouseLeave={() => setFlipChat(false)}
    >
      {flipChat ? (
        <>
           <div className="flex justify-center items-center h-[150px] w-[700px] border-[2px] rounded-[15px] border-black dark:border-white dark:text-white animate-jump-in">
            {props.review}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-[150px] w-[700px] border-[2px] rounded-[15px] border-black dark:border-white dark:text-white">
            {props.review}
          </div>
      )}
    </div>
  );
};

export default ChatWindow;
