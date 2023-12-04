import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-[100%] h-full bg-blue-950 m-auto justify-center">
      
      <div className="flex  items-center">
        <div className="flex space-x-20 font-raleway font-bold text-white text-xl justify-center mt-4">
          <Link href={"/motores"}>Motores</Link>
          <Link href={"/repuestos"}>Repuestos</Link>
          <Link href={"/nosotros"}>Nosotros</Link>
          <Link href={"/contacto"}>Contacto</Link>
        </div>
        <div className="flex text-white space-x-20 mt-[20px] ml-[400px] cursor-pointer">
          <FaFacebook size={40} />
          <FaLinkedin size={40} />
          <FaInstagram size={40} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
