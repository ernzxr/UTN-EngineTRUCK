/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "@/app/components/header";

export default function page() {
    return (
      <main className="relative dark:bg-gray-700">
        <section className="flex w-[1200px] h-[600px] border-black border-2 m-auto mt-[100px]">
          <img src="../motor_2.jpg" alt="Motor" className="w-[50%] h-[75%] m-10 rounded-[20px] shadow-md"/>
          <div className="flex flex-col justify-around w-[45%] h-[75%] border-black border-2 m-10">
            <p>NOMBRE DEL MOTOR</p>
            <div>
              <p>POTENCIA</p>
              <p>ACA VA LA POTENCIA</p>
            </div>
            <div>
              <p>CANTIDAD DE UNIDADES</p>
              <p>ACA VA LA CANTIDAD DE UNIDADES EN STOCK</p>
            </div>
          </div>
        </section>
      
      </main>
    );
  }