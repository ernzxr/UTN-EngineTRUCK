import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-[50%] h-full bg-gray-500 m-auto'>
      <div className="flex flex-col items-center">
        <div className="flex space-x-20 font-raleway font-bold text-white text-xl justify-center mt-8">
          <Link href={"/motores"}>Motores</Link>
          <Link href={"/repuestos"}>Repuestos</Link>
          <Link href={"/nosotros"}>Nosotros</Link>
          <Link href={"/contacto"}>Contacto</Link>
        </div>
        <div className='flex text-white justify-center space-x-20 mt-[60px] cursor-pointer'>
          <FaFacebook size={50} />
          <FaLinkedin size={50} />
          <FaInstagram size={50} />
        </div>
      </div>
    </div>
  )
}

export default Footer;