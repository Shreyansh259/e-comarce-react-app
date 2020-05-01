import React from "react";

import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <ProductPage />
      </main>
    </div>
  );
}

export default App;
