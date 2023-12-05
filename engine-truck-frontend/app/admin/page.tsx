"use client";

import Header from "../components/header";
import Component from "../components/form";

export default function page() {
    return (
      <main className="relative dark:bg-gray-700">
        <Header />
        <Component />
      </main>
    );
  }