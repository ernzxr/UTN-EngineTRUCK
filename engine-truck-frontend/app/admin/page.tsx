"use client";

import Header from "../components/AdminHeader";
import Login from "../components/Login";

export default function Page() {
  return (
    <main className="relative dark:bg-gray-700">
      <Header />
      <Login />
    </main>
  );
}