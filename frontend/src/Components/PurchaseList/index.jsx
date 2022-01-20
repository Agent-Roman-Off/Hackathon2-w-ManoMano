import { useEffect, useState } from 'react';
import axios from 'axios';
import SPurchaseList from './style';

export default function purchaseList() {
  const [items, setItems] = useState([]);

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
        <div className="article1">
          <div className="status">
            <h3>Because you bought RELATED PRODUCT</h3>
            <p>Ordered on DATE</p>
          </div>
          <div className="rowArticle">
            <img
              src="data:image/jpeg;base64,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"
              alt="marteau"
            />
            <p>Marteau de Mécanicien 32mm Manche Graphite FACOM 200C.32</p>
          </div>
          <div className="containerButton">
            <button className="cartButton" type="button">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="grid">
          {items.map((item) => {
            return (
              <div className="article1">
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
                  <button className="cartButton" type="button">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </SPurchaseList>
    </>
  );
}
