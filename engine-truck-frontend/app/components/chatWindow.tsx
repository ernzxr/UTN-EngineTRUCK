import React, { useState, useEffect } from "react";

const ChatWindow = (props: any) => {

  return (
    <div className="flex justify-center items-center h-[150px] w-[640px] shadow-lg  rounded-[10px] dark:text-blue-900 text-center font-semibold p-[45px]">
    {props.review}
  </div>
  );
};

export default ChatWindow;
