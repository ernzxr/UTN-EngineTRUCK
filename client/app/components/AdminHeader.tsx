'use client'
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FC } from "react";

const Header: FC<{}> = function () {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');

    router.push('/');
  };

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
          <Navbar.Link className="hover:border-white hover:border-b-[1px] hover:dark:border-white  text-white dark:text-white " href="/admin/dashboard" /*active*/ >DASHBOARD</Navbar.Link>
          <Navbar.Link className="hover:border-white hover:border-b-[1px] hover:dark:border-white  text-white dark:text-white " href="" onClick={handleLogout}>SALIR</Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;