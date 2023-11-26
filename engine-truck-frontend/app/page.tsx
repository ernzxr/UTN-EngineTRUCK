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
      <section className="relative w-[1000px] h-[600px]">
        <NavCard width="150px" height="300px"/>
        <div className="absolute left-[1000px]">
        <NavCard width="300px" height="200px" />
        </div>
        
      </section>
      


    </main>
  );
}
