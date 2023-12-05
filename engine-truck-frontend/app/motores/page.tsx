"use client";

import Header from "../components/header";
import EngineCard from "../components/engineCard";

export default function page() {
    return (
      <main className="relative dark:bg-gray-700">
        <div className="text-8xl flex justify-center">Fancy Titulo/Descripcion de Motores</div>
        <div className="flex flex-wrap justify-start h-full w-[1200px] border-black border-2 m-auto mt-[100px] px-1">
        <EngineCard />
        <EngineCard />
        <EngineCard />
        <EngineCard />
        </div>
      </main>
    );
  }