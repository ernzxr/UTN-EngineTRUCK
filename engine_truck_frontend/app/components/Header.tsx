'use client'
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";
import Link from 'next/link';

const Header: FC<Record<string, never>> = function () {
  return (
    <header className="sticky top-0 z-20 border-b-[1px] border-gray-700 dark:border-blue-700 ">
      <Navbar fluid className="bg-blue-950 ">
        <Navbar.Brand href="/">
          <Image className="ml-[20%] mr-[15%]"
            alt="Flowbite logo"
            height="24"
            src="/engine_truck_ovallogo.png"
            width="54"
            
          />
          <span className="self-center whitespace-nowrap px-3 text-xl font-semibold text-white ml-3">
            EngineTRUCK
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        <Navbar.Collapse>
          <div className="flex space-x-20 font-raleway font-bold  ">
          <Navbar.Link className="hover:border-white hover:border-b-[1px] hover:dark:border-white  text-white dark:text-white " as={Link} href="/" >INICIO</Navbar.Link>
          <Navbar.Link className="hover:border-white hover:border-b-[1px] hover:dark:border-white  text-white dark:text-white " as={Link} href="/motores">MOTORES</Navbar.Link>
          <Navbar.Link className="hover:border-white hover:border-b-[1px] hover:dark:border-white  text-white dark:text-white " as={Link} href="/repuestos">REPUESTOS</Navbar.Link>
          <Navbar.Link className="hover:border-white hover:border-b-[1px] hover:dark:border-white  text-white dark:text-white " as={Link} href="/nosotros" >NOSOTROS</Navbar.Link>
          <Navbar.Link className="hover:border-white hover:border-b-[1px] hover:dark:border-white  text-white dark:text-white " as={Link} href="/contacto">CONTACTO</Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;