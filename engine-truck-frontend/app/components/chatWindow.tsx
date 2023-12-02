import React, { useState, useEffect } from "react";

const ChatWindow = (props: any) => {

  return (
    <div className="flex justify-center items-center h-[150px] w-[640px] border-[1px] rounded-[10px] border-black dark:border-white dark:text-white text-center font-semibold p-[45px]">
    {props.review}
  </div>
  );
};

export default ChatWindow;
