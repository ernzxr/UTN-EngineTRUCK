"use client";

import Header from "../components/Header";
import ComponentCard from "../components/ComponentCard";
import Footer from "../components/FooterReact";

export default function Page() {
    return (
      <main className="relative dark:bg-gray-700">
        <Header />
        <img src="/cam_t1.jpg" alt="" className="w-full h-[80%]"/>
        <section className="relative h-full  w-[80%] xl:w-[70%] bg-blue-100 rounded-[5px] shadow-lg m-auto mt-[1%] p-[7%] bottom-4 xl:bottom-10">
        <p className="xl:text-6xl text-xl font-raleway text-center font-bold text-blue-900">NUESTRO LISTADO DE REPUESTOS</p>
        <p className="xl:text-xl text-m mt-[2%] xl:mt-[5%] font-raleway text-center font-bold">En EngineTRUCK no solo vendemos motores semi armados, además brindamos soluciones como repuestos y partes esenciales para la colocacion de su motor</p>
        </section>
        <section className="flex flex-wrap justify-center items-center h-full w-[90%] xl:w-[80%] bg-blue-100 rounded-[5px] shadow-lg m-auto mt-[10%] px-1">
          <ComponentCard />
        </section>

        <footer className="w-full ">
          <Footer />
        </footer>
      </main>
    );
  }