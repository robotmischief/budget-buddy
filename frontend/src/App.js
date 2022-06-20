import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Statement from './pages/Statement';
import Add from './pages/Add';
import Settings from './pages/Settings';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';


function App() {  
  // use the scroll position in Y
  // to trigger a responsive collapse
  // on the BalanceCard component
  const [posScrollY, setposScrollY] = useState(0);
  
  const handleScroll = () => {
    let posY = window.scrollY;
    setposScrollY(posY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // use the window's width size
  // to trigger a responsive feature
  // on the RecordItem component
  const hasWindow = typeof window !== 'undefined';
  
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }
  
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  

  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Statement posY={posScrollY} windowWidth={windowDimensions.width} />} />
            <Route path='/add' element={<Add />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </ GlobalProvider>
    </BrowserRouter>
  );
}

export default App;