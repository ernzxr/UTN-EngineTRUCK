"use client";

import Header from "../components/Header";
import Footer from "../components/FooterReact";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative dark:bg-gray-700">
        <img src="/mf_nos.jpg" alt="" className="w-full h-[450px]" />
        <section className="relative h-full w-[1200px] bg-blue-100 rounded-[5px] shadow-lg m-auto mt-[10px] p-[75px] bottom-10">
          <p className="text-2xl font-raleway font-bold text-blue-900">EngineTRUCK es una empresa que brinda soluciones desde el año 2004. Llevamos nuestros productos diretamente al transportista.
            Nuestros productos son de la mejor calidad y durabilidad, desde motores semiarmados y semiarmados enchavetados hasta repuestos.
            No dude en contactarse con nosotros y obtener nuestros productos.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}