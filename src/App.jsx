import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import SearchAppBar from "./compoents/AppBar/SearchAppBar";


import Tour from "./Pages/Tour";
import Home from "./Pages/Home";
import ContactUs from "./Pages/4-Contact/ContactUs";



function App() {
  return (
    <>
      <BrowserRouter>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Tour />} />
        </Routes>
        <ContactUs />
      </BrowserRouter>
    </>
  );
}

export default App;
