import './App.css';
import {Routes ,Route } from 'react-router-dom';

import Home from './Pages/Home';
import Book from './Pages/Book';
import Vehicles from './Pages/Vehicles';
import Login from './Pages/Login';
import Electronics from './Pages/Electronics'
import Furniture from './Pages/Furniture'
import Registration from './Pages/Registration';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Book' element={<Book/>}></Route>
      <Route path='/Vehicles' element={<Vehicles/>}></Route>
      <Route path='/Electronics' element={<Electronics/>}></Route>
      <Route path='/Furniture' element={<Furniture/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Registration' element={<Registration/>}></Route>
    </Routes>
    </>
  );
}

export default App;
