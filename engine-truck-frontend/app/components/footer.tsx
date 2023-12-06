
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-[100%] h-[100%] bg-blue-950 m-auto justify-center mt-[3%] ">
      
      <div className="flex  items-center">
        <div className="flex space-x-20 font-raleway text-base font-bold text-white justify-center ml-[20%] mr-[25%]">
          <Link href={"/motores"}>MOTORES</Link>
          <Link href={"/repuestos"}>REPUESTOS</Link>
          <Link href={"/nosotros"}>NOSOTROS</Link>
          <Link href={"/contacto"}>CONTACTO</Link>
        </div>
        <div className="flex text-white space-x-20 mt-[3%] mb-[3%] cursor-pointer">
          <FaFacebook size={30} />
          <FaLinkedin size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;