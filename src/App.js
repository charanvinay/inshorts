import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import Navbar from './component/navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
