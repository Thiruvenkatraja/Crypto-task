import { Route, Routes } from "react-router-dom";
import "./App.css";
import CryptoDataGrid from "./Components/CryptoDataGrid";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
    <div >      
      <Routes>
        <Route path="/" element={<CryptoDataGrid />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>

    </>
  );
}

export default App;
