"use client";

import Header from "../components/Header";
import ComponentCard from "../components/ComponentCard";
import Footer from "../components/FooterReact";

export default function Page() {
    return (
      <main className="relative dark:bg-gray-700">
        <Header />
        <img src="/cam_t1.jpg" alt="" className="w-full h-[450px]"/>
        <section className="relative h-full w-[1200px] bg-blue-100 rounded-[5px] shadow-lg m-auto mt-[10px] p-[75px] bottom-10">
        <p className="text-5xl font-raleway text-center font-bold text-blue-900">NUESTRO LISTADO DE REPUESTOS</p>
        <p className="text-xl mt-[40px] font-raleway text-center font-bold">En EngineTRUCK no solo vendemos motores semi armados, además brindamos soluciones como repuestos y partes esenciales para la colocacion de su motor</p>
        </section>
        <section className="flex flex-wrap justify-start h-full w-[1200px] bg-blue-100 rounded-[1%] shadow-lg m-auto mt-[100px] px-1">
          <ComponentCard />
          <ComponentCard />
          <ComponentCard />
          <ComponentCard />
        </section>
        <footer className="w-full ">
          <Footer />
        </footer>
      </main>
    );
  }