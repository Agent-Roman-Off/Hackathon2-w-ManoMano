import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import BasketPage from './Components/BasketPage';
import PurchaseList from './Components/PurchaseList';
import HomePage from './Components/HomePage';
import './reset.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resupply" element={<PurchaseList />} />
        <Route path="/checkout" element={<BasketPage />} />
      </Routes>
    </>
  );
}

export default App;
