"use client";

import Header from "../components/Header";
import ComponentCard from "../components/ComponentCard";

export default function Page() {
    return (
      <main className="relative dark:bg-gray-700">
        <Header />
        <div className="flex flex-col justify-center items-center mt-[40px] font-raleway font-bold">
        <p className="mb-8 text-6xl">Listado de Repuestos</p>
        <p className="text-xl">EngineTRUCK no solo vende motores semi armados, sino que brinda toda venta de repuestos y partes esenciales para la colocacion del motor.</p>
        </div>
        <section className="flex flex-wrap justify-start h-full w-[1200px] bg-blue-100 rounded-[1%] shadow-lg m-auto mt-[100px] px-1">
          <ComponentCard />
          <ComponentCard />
          <ComponentCard />
          <ComponentCard />
        </section>
        
        

      </main>
    );
  }