import React from 'react'

const ChatWindow = (props: any) => {
  return (
    <div className='flex justify-center items-center h-[150px] w-[700px] border-[2px] rounded-[15px] border-black'>{props.review}</div>
  )
}

export default ChatWindow