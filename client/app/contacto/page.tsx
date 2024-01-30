"use client";

import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import { Label, TextInput } from 'flowbite-react';
import Footer from "../components/FooterReact";

export default function Page() {
    return (
      <main className="relative dark:bg-gray-700">
        <Header />
        <div className="flex w-[200%] h-[100%] xl:w-[80%] xl:h-[80%] m-auto xl:mt-[8%] xl:mb-[10%] mt-[25%] mb-[27%] ">
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