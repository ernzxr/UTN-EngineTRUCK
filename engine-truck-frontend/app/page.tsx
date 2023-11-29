"use client";

import React, { useState } from "react";
import Image from "next/image";

import Header from "./components/header";
import Carousel from "./components/carousel";
import NavCard from "./components/navCard";
import ChatWindow from "./components/chatWindow";


export default function Index(): JSX.Element {
  return (
    <main className="relative dark:bg-gray-700">
      <Header />
      <section className="flex box-border h-[700px] w-full mx-auto my-auto">
        <div className="relative group box-border h-full w-full mx-auto my-auto">
          <Carousel />
        </div>
      </section>
      <section className="relative h-[750px] w-[1440px] m-auto mt-[220px]">
        <div className="absolute top-[50px] left-[70px] w-[800px] h-[300px] rounded-[100px] text-justify">
          <NavCard
            title="Motores"
            description=" ¡No retifique más! Elija algunas de nuestras opciones de mejor calidad "
            imagen="./motor_2.jpg"
          />
        </div>
        <div className="absolute top-[400px] left-[70px] w-[800px] h-[300px] text-justify">
          <NavCard
            title="Repuestos"
            description="Los mejores repuestos para los mejores modelos. Calidad garantizada"
            imagen="./repuesto_2.jpg"
          />
        </div>
        <div className="absolute top-[50px] left-[920px] w-[450px] h-[650px] text-justify">
          <NavCard
            title="Contacto"
            description="Contacto directo y atención en el momento"
            imagen="./contacto_1.jpg"
          />
        </div>
      </section>
      <section className="relative h-[640px] w-[1440px] border-2 border-black m-auto mt-[220px]">
        <div className="absolute left-[40px] top-[20px]"><ChatWindow review="Caught Somewhere in Time. Iron Maiden"/></div>
        <div className="absolute left-[700px] top-[250px]"><ChatWindow review="Altes Fleisch. Lindemann"/></div>
        <div className="absolute left-[40px] top-[470px]"><ChatWindow review="No Way. Korn"/></div>
        </section>
    </main>
  );
}
