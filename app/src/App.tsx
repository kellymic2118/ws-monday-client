import "./App.css";
import { ThemeProvider } from "./context/theme-provider";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./routing/routing";

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="ws-monday-ui-theme">
      <BrowserRouter> 
        <Routing />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
