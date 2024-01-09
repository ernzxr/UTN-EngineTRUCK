"use client";

import Header from "../components/Header";
import ComponentCard from "../components/ComponentCard";
import Footer from "../components/Footer";

export default function Page() {
    return (
      <main className="relative dark:bg-gray-700">
        <Header />
        <div className="flex flex-col justify-center items-center mt-[40px] font-raleway font-bold">
        <p className="text-xl text-center mt-[40px]">En EngineTRUCK no solo vendemos motores semi armados, además brindamos soluciones como repuestos y partes esenciales para la colocacion de su motor.</p>
        <p className="mb-8 text-6xl mt-[40px]">Listado de Repuestos</p>
        </div>
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