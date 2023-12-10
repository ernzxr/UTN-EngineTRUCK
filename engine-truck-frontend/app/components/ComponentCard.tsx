import Link from 'next/link'
import React from 'react'

const ComponentCard = () => {
  return (
    <Link href="/repuestos/articuloRepuesto" className="flex flex-col items-center w-[300px] h-[300px] shadow-lg bg-white m-[4%] rounded-[10px] cursor-pointer hover:shadow-2xl hover:shadow-blue-900 duration-300 dark:hover:shadow-2xl dark:hover:shadow-blue-200 hover:scale-105">
        <div className="flex w-[70%] h-[60%]  border-black border-2 rounded-[10px] mt-12"></div>
        <div className="mt-6 dark:text-white">NOMBRE DE REPUESTO</div> 
    </Link>
  )
}

export default ComponentCard