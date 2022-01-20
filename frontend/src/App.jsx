import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import PurchaseList from './Components/PurchaseList';
// import Basket from './Components/Basket';
import './reset.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/resupply" element={<PurchaseList />} />
        {/* <Route path='/checkout' element={<Basket/>}/> */}
      </Routes>
    </>
  );
}

export default App;
