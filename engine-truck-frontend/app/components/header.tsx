import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";

const Header: FC<Record<string, never>> = function () {
  return (
    <header className="sticky top-0 z-20 bg-blue-800 border-b-[1px] border-gray-400 dark:border-white">
      <Navbar fluid>
        <Navbar.Brand href="/">
          <Image
            alt="Flowbite logo"
            height="24"
            src="/et_png_logo.png"
            width="54"
          />
          <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white ml-3">
            EngineTRUCK
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        <Navbar.Collapse>
          <div className="flex space-x-20 font-raleway font-bold ">
          <Navbar.Link className="hover:border-black hover:border-b-[1px] hover:dark:border-white" href="/" /*active*/ >INICIO</Navbar.Link>
          <Navbar.Link className="hover:border-black hover:border-b-[1px] hover:dark:border-white" href="/motores">MOTORES</Navbar.Link>
          <Navbar.Link className="hover:border-black hover:border-b-[1px] hover:dark:border-white" href="/repuestos">REPUESTOS</Navbar.Link>
          <Navbar.Link className="hover:border-black hover:border-b-[1px] hover:dark:border-white" href="/nosotros" >NOSOTROS</Navbar.Link>
          <Navbar.Link className="hover:border-black hover:border-b-[1px] hover:dark:border-white" href="/contacto">CONTACTO</Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
