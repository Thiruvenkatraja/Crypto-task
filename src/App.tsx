import { Route, Routes } from "react-router-dom";
import "./App.css";
import CryptoDataGrid from "./Components/CryptoDataGrid";

function App() {
  return (
    <>
    <div style={{background:"linear-gradient(to right, #8e2de2, #4a00e0)"}}>      
      <Routes>
        <Route path="/" element={<CryptoDataGrid />} />
      </Routes>
      </div>

    </>
  );
}

export default App;
