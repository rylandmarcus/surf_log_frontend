import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <h1>Surf Sessions Log</h1>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
