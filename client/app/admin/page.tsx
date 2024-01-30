'use client'
import Header from "../components/AdminHeader";
import Login from "../components/Login";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative dark:bg-gray-700">
        <Login />
      </main>
    </>
  );
}