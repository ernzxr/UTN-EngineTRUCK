import FlowbiteContext from "./context/FlowbiteContext";
import { Providers } from "../lib/redux/provider";
import "./styles/globals.css";


export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="es">
        <body>
          <FlowbiteContext>{props.children}</FlowbiteContext>
        </body>
      </html>
    </Providers>
  );
};
