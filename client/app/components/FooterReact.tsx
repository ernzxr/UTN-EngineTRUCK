import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Footer } from 'flowbite-react';

const FooterReact = () => {
  return (
    <Footer container>
      <Footer.Copyright href="/" by="EngineTRUCK"  />
      <Footer.LinkGroup className="flex items-center space-x-2 xl:mt-[5px] xl:space-x-9">
        <Footer.Link href={"/motores"}>MOTORES</Footer.Link>
        <Footer.Link href={"/repuestos"}>REPUESTOS</Footer.Link>
        <Footer.Link href={"/nosotros"}>NOSOTROS</Footer.Link>
        <Footer.Link href={"/contacto"}>CONTACTO</Footer.Link>
      </Footer.LinkGroup>
      <div className="flex items-center space-x-10 xl:space-x-9 xl:mt-[5px]">
        <a href="https://wa.me/541158961457" target="_blank" rel="noopener noreferrer" className="flex items-center"> 
          <IoLogoWhatsapp size={28} className="cursor-pointer " />
        </a>
        <a href="https://www.facebook.com/motores.semiarmados" target="_blank" rel="noopener noreferrer" className="flex items-center"> 
          <FaFacebook size={28} className="cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/search/results/all/headless?keywords=enginetruck&origin=TYPEAHEAD_ESCAPE_HATCH&lipi=urn%3Ali%3Apage%3Asearch_results_generic_index%3B5cfbf4ce-f8e0-4c8a-aa09-9104a61de796" target="_blank" rel="noopener noreferrer" className="flex center"> 
          <FaLinkedin size={28} className="cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/enginetruck7/?hl=es" target="_blank" rel="noopener noreferrer" className="flex items-center"> 
          <BiLogoInstagramAlt size={28} className="cursor-pointer" />
        </a>
      </div>
        
      
    </Footer>
  );
};

export default FooterReact;