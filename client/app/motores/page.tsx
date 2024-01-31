"use client";

import Header from "../components/Header";
import Footer from "../components/FooterReact";
import EngineCard from "../components/EngineCard";


export default function Page() {
    return (
    <main className="relative dark:bg-gray-700">
      <Header />
        <img src="/mot_t3.jpg" alt="" className="w-full h-[80%]"/>
        <section className="relative h-full w-[80%] xl:w-[70%] bg-blue-100 rounded-[5px] shadow-lg m-auto mt-[1%] p-[7%] bottom-4 xl:bottom-10">
        <p className="xl:text-6xl text-xl font-raleway text-center font-bold text-blue-900">NUESTROS SEMI ARMADOS</p>
        <p className="xl:text-xl text-m mt-[2%] xl:mt-[5%] font-raleway text-center font-bold">La mejor selección de semi armados y semi armados enchavetados</p>
        </section>
        
        <div className="flex flex-wrap justify-start h-full w-[1200px] bg-blue-100 rounded-[1%] shadow-lg m-auto mt-[100px] px-1">
        <EngineCard />
        </div>
      <footer className="w-full ">
          <Footer />
        </footer>
    </main>
    );
  }