
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
          <a href="https://wa.me/541158961457" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp size={32} className="cursor-pointer"/>
          </a>
          <a href="https://www.facebook.com/motores.semiarmados" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="cursor-pointer"/>
          </a>
          <a href="https://www.linkedin.com/search/results/all/headless?keywords=enginetruck&origin=TYPEAHEAD_ESCAPE_HATCH&lipi=urn%3Ali%3Apage%3Asearch_results_generic_index%3B5cfbf4ce-f8e0-4c8a-aa09-9104a61de796" target="_blank" rel="noopener noreferrer">
             <FaLinkedin size={30} className="cursor-pointer"/>
          </a>
          <a href="https://www.instagram.com/enginetruck7/?hl=es" target="_blank" rel="noopener noreferrer">
             <BiLogoInstagramAlt size={34} className="cursor-pointer"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;