import { Routes, Route } from 'react-router-dom';
import PurchaseList from './PurchaseList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PurchaseList />} />
    </Routes>
  );
}

export default App;
