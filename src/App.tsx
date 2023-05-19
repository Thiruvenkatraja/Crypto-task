import { Route, Routes } from "react-router-dom";
import "./App.css";
import CryptoDataGrid from "./Components/CryptoDataGrid";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CryptoDataGrid />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
