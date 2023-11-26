"use client";

import React, { useState } from "react";

import Header from "./components/header";
import Carousel from "./components/carousel";
import NavCard from "./components/navCard";


export default function Index(): JSX.Element {
  return (
    <main className="dark:bg-gray-700">
      <Header />
      <section className="flex box-border h-[500px] w-[1440px] mx-auto my-auto mt-[100px]">
        <div className="relative box-border h-[450px] w-[700px] mx-auto my-auto dark:text-white">
          <p className="absolute top-[50px] left-[110px] text-[70px]">Engine TRUCK</p>
          <p className= "absolute mt-[240px] px-[15px] text-[22px] text-center">
            Ofreciendo calidad superior en semiarmados con durabilidad y
            confiabilidad excepcionales. Desde 2004, directo al transportista
            nuestro compromiso es brindar soluciones de primera clase
          </p>
        </div>
        <div className="relative group box-border h-[450px] w-[700px] mx-auto my-auto">
          <Carousel />
        </div>
      </section>
      <section className="relative h-[750px] w-[1440px] border-black border-2 m-auto">
        <div className="absolute top-[50px] left-[70px] w-[800px] h-[300px]"><NavCard texto="Motores"/></div>
        <div className="absolute top-[400px] left-[70px] w-[800px] h-[300px]"><NavCard texto="Repuestos"/></div>
        <div className="absolute top-[50px] left-[900px] w-[300px] h-[650px]"><NavCard texto="Contacto"/></div>
        
      
        
      </section>
      


    </main>
  );
}
