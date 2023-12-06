import { FC, PropsWithChildren } from "react";
import FlowbiteContext from "./context/FlowbiteContext";
import "./globals.css";
import Providers from "./redux/provider"


const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
      <html lang="en">
        <Providers>
          <body>
            <FlowbiteContext>{children}</FlowbiteContext>
          </body>
        </Providers>
      </html>
  );
};

export default RootLayout;
