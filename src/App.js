import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Custome from './components/Custome';

function App() {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/watch' element={<Custome/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
