import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ReduxProvider } from "@/lib/redux/ReduxProvider";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import { type FC, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { flowbiteTheme } from "./styles/theme";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "EngineTRUCK",
  description: "EngineTRUCK"
}

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <ReduxProvider>
      <html lang="es">
        <head>
          <ThemeModeScript />
        </head>
        <body className={twMerge("bg-gray-50 dark:bg-gray-900", inter.className)}>
          <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite >
        </body>
      </html>
    </ReduxProvider>
 );
};

export default RootLayout;