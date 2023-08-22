import { AuthProvider } from "./context";
import { RoutesApp } from "./routes";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import GlobalStyles from "./assets/styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
