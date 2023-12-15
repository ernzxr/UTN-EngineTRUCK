import React from 'react'

const LogoCard = (props: any) => {
  return (
    <div className='w-[180px] h-[180px] '>
      <img src={props.imagen} alt="" className='border-black border-2 rounded-full hover:scale-110 duration-300'/>
    </div>
  )
}

export default LogoCard