import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SPurchaseList from './style';
import 'react-toastify/dist/ReactToastify.css';

export default function purchaseList() {
  const [items, setItems] = useState([]);
  const notify = () => toast.success('Add article to basket!');
  useEffect(() => {
    axios
      .get('http://localhost:5050/consumables')
      .then(({ data }) => {
        setItems(data);
      })
      .catch(() => {
        console.error('Plz fix your call, or set up your internet');
      });
  }, []);
  return (
    <>
      <SPurchaseList>
        <div className="title">
          <h1>Relevant consumables</h1>
          <p>Display all the consumables related to previous purchases</p>
        </div>
        <div className="grid">
          {items.map((item) => {
            return (
              <div className="article1 background">
                <div className="status">
                  <h3>Because you bought RELATED PRODUCT</h3>
                  <p>Ordered on DATE</p>
                </div>
                <div className="rowArticle">
                  <img src={item.picture} alt={item.name} />
                  <div className="details">
                    <p>{item.name} </p>
                    <p>Ref: {item.reference}</p>
                    <p>Price: {item.cost}€</p>
                  </div>
                </div>
                <div className="containerButton">
                  <button className="cartButton" type="button" onClick={notify}>
                    Add to Cart
                  </button>
                </div>
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>
            );
          })}
        </div>
      </SPurchaseList>
    </>
  );
}
