import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Card from "./pages/Card/Card";
import Footer from "./components/Footer";

import "./scss/app.scss";

function App() {
  return (
    <>
    <div className="wrapper">
        <Header />
        <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/card" element={<Card />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;