import { StrictMode } from "react";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";
import { Provider } from "./components/ui/provider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
      
          <App />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
