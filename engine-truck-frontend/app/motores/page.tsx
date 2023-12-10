/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import EngineCard from "../components/EngineCard";


export default function Page() {
    return (
    <main className="relative dark:bg-gray-700">
      <Header />
        <img src="/mot_t2.jpg" alt="" className="w-full h-[450px]"/>
        <div className="mt-[3%] mb-[1%] font-raleway-bold text-6xl flex justify-center">NUESTROS SEMI ARMADOS</div>
        <div className="mb-[1%] font-raleway text-xl flex justify-center">La mejor selección de semi armados y semi armados enchavetados</div>
        <div className="flex flex-wrap justify-start h-full w-[1200px] bg-blue-100 rounded-[1%] shadow-lg m-auto mt-[100px] px-1">
        <EngineCard />
        <EngineCard />
        <EngineCard />
        <EngineCard />
        </div>
      <footer className="w-full ">
          <Footer />
        </footer>
    </main>
    );
  }