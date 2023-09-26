import React from "react";

import Error404 from "./Error404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./page/ContactUs";
import Work from "./page/Work";
import Abouts from "./page/Abouts";
import Loginn from "./page/Loginn";
import Singup from "./page/Singup";

//which file we want to show then we need to import that file.
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/news" element={<Work />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/login" element={<Loginn />} />
        <Route path="/signup" element={<Singup/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
