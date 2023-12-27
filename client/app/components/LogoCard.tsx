import React from 'react'

const LogoCard = (props: any) => {
  return (
    <div className='w-[180px] h-[180px] '>
      <img src={props.imagen} alt="" className='shadow-md rounded-full hover:scale-110 duration-300'/>
    </div>
  )
}

export default LogoCard