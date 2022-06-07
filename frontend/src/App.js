import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Statement from './pages/Statement';
import Add from './pages/Add';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import { useState, useEffect } from 'react';





function App() {
  const [posScrollY, setposScrollY] = useState(0);

  const handleScroll = () => {
    let posY = window.scrollY;
    setposScrollY(posY);
    // console.log(`scrolling at last! ${posY}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Statement posY={posScrollY} />} />
            <Route path='/add' element={<Add />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </ GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
