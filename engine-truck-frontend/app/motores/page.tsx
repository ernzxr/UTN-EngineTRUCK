"use client";

import Header from "../components/header";
import EngineCard from "../components/engineCard";

export default function page() {
    return (
      <main className="relative dark:bg-gray-700">
        <Header />
        <div className="flex flex-wrap justify-start h-full w-[1200px] border-black border-2 m-auto mt-[100px]">
        <EngineCard />
        <EngineCard />
        <EngineCard />
        <EngineCard />
        <EngineCard />
        <EngineCard />
        <EngineCard />
        

        
        
        

        </div>
      </main>
    );
  }