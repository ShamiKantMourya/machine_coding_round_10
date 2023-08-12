import { Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Department from './Pages/Department/Department';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
  <Routes>
    <Route path='/' element = {<Dashboard />} />
    <Route path='/department' element = {<Department />} />
    <Route path='/products' element = {<Products />} />
  </Routes>
    </div>
  );
}

export default App;
