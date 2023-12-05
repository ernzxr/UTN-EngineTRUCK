"use client";

import Header from "@/app/components/header";

export default function page() {
  return (
    <main className="relative dark:bg-gray-700">
      <Header />
      <table className="flex flex-col w-[1200px] h-full m-auto mt-[100px] border-2 border-black">
        <thead>
          <tr className="flex flex-row gap-8 mx-7 list-none justify-around border-b-2 my-[10px]">
            <th>Motor</th>
            <th>Nombre</th>
            <th>Potencia</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
        <tr className="flex flex-row gap-8 mx-7 list-none justify-around border-b">
        <th>Motor</th>
        <th>Nombre</th>
        <th>Potencia</th>
        <th>Stock</th>
        </tr>
        </tbody>
      </table>
    </main>
  );
}
