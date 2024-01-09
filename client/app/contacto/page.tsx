"use client";

import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import { Label, TextInput } from 'flowbite-react';
import Footer from "../components/Footer";

export default function Page() {
    return (
      <main className="relative dark:bg-gray-700">
        <Header />
        <div className="flex w-[1200px] h-[500px] m-auto mt-[60px] mb-[200px]">
        <div className="flex w-[45%] h-[90%] m-auto bg-blue-200 rounded-[1%] shadow-lg">
          <ContactForm />
        </div>
        <div className="flex w-[45%] h-[90%] m-auto bg-blue-200 rounded-[1%] shadow-lg"></div>
        </div>
        <footer className="w-full ">
          <Footer />
        </footer>
        
      </main>
    );
  }