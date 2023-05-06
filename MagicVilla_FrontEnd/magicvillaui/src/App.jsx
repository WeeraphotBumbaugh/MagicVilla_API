import "./App.css";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Navbar from "./components/Navbar";
import CreateVilla from "./pages/CreateVilla";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<CreateVilla />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
