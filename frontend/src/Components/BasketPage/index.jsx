import Product from '../Product';
import BasketPageStyle from './style';

export default function BasketPage() {
  return (
    <>
      <BasketPageStyle>
        <main className="main">
          <div className="parent container">
            <div className="div1">
              <p className="boldFont">4 products in your basket</p>
            </div>
            <div className="div2 flexColumn">
              <p>
                Total of the basket including VAT Delivery costs calculated in
                the next step
              </p>
              <p className="bigCharacter">232€98</p>
              <p>
                Total of the basket including VAT Delivery costs calculated in
                the next step
              </p>
              <p>
                Do you have a coupon code? Keep it warm, you can add it at
                checkout
              </p>
              <button type="button" className="myButton">
                Proceed to delivery
              </button>
              <p>Payment in 3x without charge by credit card</p>
              <p>Adapted and secure means of payment</p>
              <p>Need a hand or advice?</p>
              <p>
                +33 (0)1 75 85 06 40 Monday to Friday from 8am to 8pm. Price of
                a local call.
              </p>
            </div>
            <div className="div3">
              <Product />
              <Product />
            </div>
          </div>
        </main>
      </BasketPageStyle>
    </>
  );
}
