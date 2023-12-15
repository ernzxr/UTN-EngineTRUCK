
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex w-[100%] h-[100%] bg-blue-950 m-auto justify-center mt-[3%] ">
      
      <div className="flex  items-center">
        <div className="flex space-x-20 font-raleway text-base font-bold text-white justify-center">
          <Link href={"/motores"}>MOTORES</Link>
          <Link href={"/repuestos"}>REPUESTOS</Link>
          <Link href={"/nosotros"}>NOSOTROS</Link>
          <Link href={"/contacto"}>CONTACTO</Link>
        </div>
        <div className="flex text-white space-x-20 mt-[3%] mb-[3%] ml-[200px]">
          <IoLogoWhatsapp size={32} className="cursor-pointer"/>
          <FaFacebook size={30} className="cursor-pointer"/>
          <FaLinkedin size={30} className="cursor-pointer"/>
          <BiLogoInstagramAlt size={34} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;