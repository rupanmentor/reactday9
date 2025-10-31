import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <div>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;