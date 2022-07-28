import Header from './components/Header'
import Photos from './pages/Photos'
import Carts from './pages/Cart'

import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Photos />} />
        <Route path='/cart' element={<Carts />} />
      </Routes>
    </div>
  );
}

export default App;
