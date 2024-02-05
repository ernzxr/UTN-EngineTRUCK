"use client";

import Header from "./components/Header";
import Footer from "./components/FooterReact";

export default function Index(): JSX.Element {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }} className="text-center mt-auto">
                <h3 className="text-center sm:mt-[10%] sm:mb[10%] xl:mt-[5%] xl:mb-[5%] text-4xl font-raleway font-bold">PAGINA NO ENCONTRADA</h3>
            </main>
            <Footer />
        </div>
    );
}

