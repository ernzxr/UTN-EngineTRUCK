'use client'
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";
import Link from 'next/link';

const Header: FC<Record<string, never>> = function () {
  return (
    <header className="sticky top-0 z-20 border-b-[1px] border-gray-700 dark:border-blue-700 ">
      <Navbar fluid className="bg-blue-950 ">
        <Navbar.Brand href="/" className="flex items-center">
          <Image
            alt="Flowbite logo"
            height="24"
            src="/engine_truck_ovallogo.png"
            width="54"
            className="mx-auto md:ml-[20%] md:mr-[15%] mb-2 md:mb-0"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white ml-3">
            EngineTRUCK
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        <Navbar.Collapse className="md:hidden">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <Navbar.Link as={Link} href="/" className="menu-link font-raleway font-bold text-white ">INICIO</Navbar.Link>
            <Navbar.Link as={Link} href="/motores" className="menu-link font-raleway font-bold text-white">MOTORES</Navbar.Link>
            <Navbar.Link as={Link} href="/repuestos" className="menu-link font-raleway font-bold text-white">REPUESTOS</Navbar.Link>
            <Navbar.Link as={Link} href="/nosotros" className="menu-link font-raleway font-bold text-white">NOSOTROS</Navbar.Link>
            <Navbar.Link as={Link} href="/contacto" className="menu-link font-raleway font-bold text-white">CONTACTO</Navbar.Link>
          </div>
        </Navbar.Collapse>
        <Navbar.Collapse className="hidden md:flex space-x-20 ">
          <Navbar.Link as={Link} href="/" className="menu-link font-raleway font-bold text-white">INICIO</Navbar.Link>
          <Navbar.Link as={Link} href="/motores" className="menu-link font-raleway font-bold text-white">MOTORES</Navbar.Link>
          <Navbar.Link as={Link} href="/repuestos" className="menu-link font-raleway font-bold text-white">REPUESTOS</Navbar.Link>
          <Navbar.Link as={Link} href="/nosotros" className="menu-link font-raleway font-bold text-white">NOSOTROS</Navbar.Link>
          <Navbar.Link as={Link} href="/contacto" className="menu-link font-raleway font-bold text-white">CONTACTO</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <style jsx>{`
        .menu-link {
          color: white !important;   
        }
      `}</style>
    </header>
  );
};

export default Header;
