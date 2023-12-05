import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-[100%] h-[100%] bg-blue-950 m-auto justify-center">
      
      <div className="flex  items-center">
        <div className="flex space-x-20 font-raleway text-base font-bold text-white justify-center ">
          <Link href={"/motores"}>MOTORES</Link>
          <Link href={"/repuestos"}>REPUESTOS</Link>
          <Link href={"/nosotros"}>NOSOTROS</Link>
          <Link href={"/contacto"}>CONTACTO</Link>
        </div>
        <div className="flex text-white space-x-20 mt-[20px] ml-[400px] cursor-pointer">
          <FaFacebook size={25} />
          <FaLinkedin size={25} />
          <FaInstagram size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
