import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Home from './Home';
import About from './About';
import Find from './Find';
import Header from './Header';
import Fotter from './Fotter';
import MedicineDetail from './MedicineDetail';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div><Header /></div>
      <div className="grow-1">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/about" element={<About />} />
        <Route path="/find/:sku" element={<MedicineDetail />} />
      </Routes>
      </div>

      <div ><Fotter /></div>
    </div>
  );
}

export default App;
