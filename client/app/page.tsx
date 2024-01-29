"use client";

import Header from "./components/Header";
import Footer from "./components/FooterReact";
import Carousel from "./components/home/Carousel";
import TripleLayout from "./components/home/TripleLayout";
import Reviews from "./components/home/Reviews";
import WorkingBrands from "./components/home/WorkingBrands";

export default function Index(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <section>
          <Carousel />
        </section>
        <section className="w-[80%] h-max  m-auto mt-10">
          <TripleLayout />
        </section>
        <section>
          <h1 className="text-center sm:mt-[10%] sm:mb[10%] xl:mt-[5%] xl:mb-[5%] text-4xl font-bold">EMPRESAS QUE CONFIAN EN NOSOTROS</h1>
          <WorkingBrands />
        </section>
        <section>
          <h1 className="text-center text-4xl font-bold">OPINIONES</h1>
          <Reviews />
        </section>
      </main>
      <Footer />
    </>
  );
}

