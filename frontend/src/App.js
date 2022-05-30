import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Statement from './pages/Statement';
import Add from './pages/Add';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Statement />} />
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
