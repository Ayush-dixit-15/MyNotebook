import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
     <Navbar />
     <Home/>
    </>
  );
}

export default App;
