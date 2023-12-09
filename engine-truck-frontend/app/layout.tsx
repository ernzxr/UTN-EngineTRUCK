import FlowbiteContext from "./context/FlowbiteContext";
import { Providers } from "./redux/provider";
import "./globals.css";


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
