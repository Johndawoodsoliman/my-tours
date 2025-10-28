import { BrowserRouter,Routes,Route } from "react-router-dom";

import SearchAppBar from "./compoents/AppBar/SearchAppBar";


import Tour from "./Pages/Tour";
import Home from "./Pages/Home";



function App() {
  return (
    <>
      <BrowserRouter>
        <SearchAppBar />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Tour />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
