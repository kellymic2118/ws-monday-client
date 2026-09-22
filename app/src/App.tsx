import "./App.css";
import { MarketTicker } from "./components/layout/market-ticker";
import { ThemeProvider } from "./context/theme-provider";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./routing/routing";

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="ws-monday-ui-theme">
      <BrowserRouter> 
        <MarketTicker />
        <Routing />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
