import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css'
import Home from  './components/pages/Home'
import Owners from './components/Owners'
import Owner from './components/Owner'
import RuralProperties from './components/RuralProperties'
import RuralProperty from './components/RuralProperty'
import UrbanProperties from './components/UrbanProperties'
import UrbanProperty from './components/UrbanProperty'
import Navbar from './components/inc/Navbar'

function App() {
  return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/propietarios" element={<Owners />} />
          <Route path="/propietario/:id" element={<Owner/>} />
          <Route path="/predios-rurales" element={<RuralProperties/>} />
          <Route path="/predio-rural/:id" element={<RuralProperty />} />
          <Route path="/predios-urbanos" element={<UrbanProperties />} />
          <Route path="/predio-urbano/:id" element={<UrbanProperty />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
