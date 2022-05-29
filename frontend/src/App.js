import './App.css';
import { GlobalProvider } from './context/GlobalState';
import NavBar from './components/NavBar'; 

function App() {
  return (
    <GlobalProvider>
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="main-content">
        <h3>main content goes here / react routes</h3>
      </div>
    </ GlobalProvider>
  );
}

export default App;
