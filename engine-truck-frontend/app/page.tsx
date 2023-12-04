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
        <div className="absolute top-[50px] left-[70px] w-[800px] h-[300px] rounded-[100px]">
          <NavCard
            title="Motores"
            description=" ¡No retifique más! Elija algunas de nuestras opciones de mejor calidad "
            imagen="./motor_2.jpg"
            imagenFlip = "./repuesto_2.jpg"
          />
        </div>
        <div className="absolute top-[400px] left-[70px] w-[800px] h-[300px]">
          <NavCard
            title="Repuestos"
            description="Los mejores repuestos para los mejores modelos. Calidad garantizada"
            imagen="./repuesto_2.jpg"
            imagenFlip="./motor_2.jpg"
          
          />
        </div>
        <div className="absolute top-[50px] left-[920px] w-[450px] h-[650px]">
          <NavCard
            title="Contacto"
            description="Contacto directo y atención en el momento"
            imagen="./contacto_1.jpg"
            imagenFlip="./repuesto_2.jpg"
       
          />
        </div>
      </section>
      <section className="relative h-[840px] w-[1440px] m-auto mt-[220px]">
        <div className="text-center pt-[45px] text-6xl font-semibold dark:text-white"> Reseña de nuestros clientes </div>
        <div className="absolute left-[40px] top-[160px]"><ChatWindow review="Muy buena predisposición por parte de la empresa, buena atención. Gracias!"/></div>
        <div className="absolute left-[740px] top-[160px]"><ChatWindow review="Gracias por la buena atención.Todo llegó en tiempo y forma. Muchas gracias."/></div>
        <div className="absolute left-[40px] top-[380px]"><ChatWindow review="Muy buena atención, llegó todo cigueñal y block a tiempo, Muchísimas gracias.-"/></div>
        <div className="absolute left-[740px] top-[590px]"><ChatWindow review="Muy buena atención y seriedad. Recibí todos los repuestos en tiempo y forma. Muchas gracias."/></div>
        <div className="absolute left-[40px] top-[590px]"><ChatWindow review="Muy atento, gracias por todo."/></div>
        <div className="absolute left-[740px] top-[380px]"><ChatWindow review="5 estrellas"/></div>
        </section>
      
    </main>
  );
}
