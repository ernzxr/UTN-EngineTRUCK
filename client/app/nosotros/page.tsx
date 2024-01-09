"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Page() {
    return (
      <main className="relative dark:bg-gray-700">
        <Header />
        <img src="/mf_nos.jpg" alt="" className="w-full h-[450px]"/>
        <section className="flex flex-wrap justify-start h-full w-[1200px] bg-blue-100 rounded-[1%] shadow-lg m-auto mt-[10px] p-[75px] ">
        <p className="text-2xl font-raleway font-bold">EngineTRUCK es una empresa que brinda soluciones desde el año 2004. Llevamos nuestros productos diretamente al transportista. 
        Nuestros productos son de la mejor calidad y durabilidad, desde motores semiarmados y semiarmados enchavetados hasta repuestos. 
        No dude en contactarse con nosotros y obtener nuestros productos.</p>
        </section>
        <div className=" ">

        </div>

        <footer className="w-full ">
          <Footer />
        </footer>
      </main>
    );
  }