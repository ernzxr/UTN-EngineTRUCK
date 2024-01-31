/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/FooterReact";
import { EngineResponse } from "@/lib/services/interfaces/engines";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { fetchEngines } from "@/lib/redux/features/enginesSlice";

import { useEffect } from "react";

export default function Page({params}: any) {
 
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEngines());
  }, [])

  const { enginesList } = useSelector((state: any) => state.enginesReducers);
  const model = params.articuloMotor;
  
  const motorSeleccionado = enginesList.find((motor: EngineResponse) => motor.model === model);
 

  if(motorSeleccionado) {
    return (
      <>
      <main className="relative dark:bg-gray-700">
      <Header />
      <section className="flex w-[1200px] h-[600px] m-auto mt-[10px] bg-blue-100 rounded-[30px] shadow-lg">
        <img
          src="/mot_t2.jpg"
          alt="Motor"
          className="w-[50%] h-[450px] m-10 rounded-[20px] shadow-md"
        />
        <div className="flex flex-col justify-evenly w-[45%] h-[75%] m-10">
          <p className="text-4xl font-raleway font-bold">
            {motorSeleccionado.brand.name}
          </p>
          <p className="text-2xl font-raleway">
            Principales Caracteristicas:
          </p>
          <table>
            <tbody>
              <tr className="flex flex-col text-xl font-raleway">
                <td className="p-[10px]">{motorSeleccionado.features_details}</td>
                <td className="p-[10px]">Caracteristica</td>
                <td className="p-[10px]">Caracteristica</td>
                <td className="p-[10px]">Caracteristica</td>
                <td className="p-[10px]">Caracteristica</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="absolute top-[580px] left-[20%] m-auto w-[58%] border-blue-300 border-2"></div>
        <button className="absolute top-[600px] left-[20%] mt-auto ml-4 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Volver
        </button>
        <button className="absolute top-[600px] left-[65%] mt-auto ml-4 px-12 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Consultar
        </button>
      </section>
      <section className="w-[800px] h-full m-auto mt-[20px] p-5 bg-blue-100 rounded-[30px] shadow-lg">
        <p className="py-[5px]">Informacion Tecnica</p>
        <div className="w-full border-2 border-blue-300"></div>
        <p className="p-[10px] my-[10px]">
          Bloco de Motor: Com furação para esguicho / Compressor de ar fechado
          With drilling to Jet cooler / air compressor closed / Con orificio
          para inyector de aceite / compresor de aire cerrado.
        </p>
        <p className="p-[10px] my-[10px]">
          Característica do Pistão Ø 97,50mm 63,00 – 22,20 X 108,00 (Biela
          Trapezoidal Euro I) (Trapezoidal Connecting Rod Euro I) (Biela
          Trapezoidal Euro I) 3 Canaletas Channels / Canales.
        </p>
        <p className="p-[10px] my-[10px]">
          Característica da Bomba de Óleo Engrenagem de 50mm 40mm gear /
          Engranaje de 40mm Com saída para Conta-Giros With exit to Account
          turns Con salida para Cuenta giros.
        </p>
        
        
      </section>

      <footer className="w-full ">
        <Footer />
      </footer>
    </main>
    </>
    )
  }
 
  else {
    return (
      <p>Motor No Encontrado</p>
    )
  }
}