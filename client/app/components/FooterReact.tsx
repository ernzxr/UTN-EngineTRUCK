
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Footer } from 'flowbite-react';

const FooterReact = () => {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="EngineTRUCK" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href={"/motores"}>MOTORES</Footer.Link>
        <Footer.Link href={"/repuestos"}>REPUESTOS</Footer.Link>
        <Footer.Link href={"/nosotros"}>NOSOTROS</Footer.Link>
        <Footer.Link href={"/contacto"}>CONTACTO</Footer.Link>
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
      </Footer.LinkGroup>
    </Footer>
  );
};

export default FooterReact;