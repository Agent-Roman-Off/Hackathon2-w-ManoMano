import { Routes, Route } from 'react-router-dom';
import BasketPage from 'Components/BasketPage';
import PurchaseList from './Components/PurchaseList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PurchaseList />} />
      <Route path="/basketpage" element={<BasketPage />} />
    </Routes>
  );
}

export default App;
