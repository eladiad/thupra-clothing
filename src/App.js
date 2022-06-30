import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./copponents/header/header.component";

import "./App.css";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
