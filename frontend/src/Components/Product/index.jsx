import ProductStyle from './style';

export default function Product() {
  return (
    <>
      <ProductStyle>
        <section className="product">
          <figure>
            <img
              src="https://media.adeo.com/marketplace/LMFR/80131114/52972e10-e640-4b06-8877-33a841bb66f6.jpeg?width=650&height=650&format=jpg&quality=80&fit=bounds"
              alt="images"
            />
            <p>Can of blue paint 12L</p>
            <div className="counter">
              <button type="button"> - </button>
              <p> 1 </p>
              <button type="button"> + </button>
            </div>
          </figure>
          <div className="priceProduct">
            <button type="button">
              <img
                src="https://img.icons8.com/material-outlined/12/d4d4d4/pin.png"
                alt="aside"
              />
              set aside
            </button>
            <button type="button">
              <img
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/12/d4d4d4/external-delete-multimedia-kiranshastry-solid-kiranshastry.png"
                alt="delete"
              />
              Delete
            </button>
            <p>80€00</p>
          </div>
        </section>
        <section className="product">
          <figure>
            <img
              src="https://media.adeo.com/marketplace/LMFR/80131114/52972e10-e640-4b06-8877-33a841bb66f6.jpeg?width=650&height=650&format=jpg&quality=80&fit=bounds"
              alt="images"
            />
            <p>Box of 1000 screws, 5&lsquo;x60&lsquo;</p>
            <div className="counter">
              <button type="button"> - </button>
              <p> 1 </p>
              <button type="button"> + </button>
            </div>
          </figure>
          <div className="priceProduct">
            <button type="button">
              <img
                src="https://img.icons8.com/material-outlined/12/d4d4d4/pin.png"
                alt="aside"
              />
              set aside
            </button>
            <button type="button">
              <img
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/12/d4d4d4/external-delete-multimedia-kiranshastry-solid-kiranshastry.png"
                alt="delete"
              />
              Delete
            </button>
            <p>60.34€</p>
          </div>
        </section>
        <section className="product">
          <figure>
            <img
              src="https://media.adeo.com/marketplace/LMFR/80131114/52972e10-e640-4b06-8877-33a841bb66f6.jpeg?width=650&height=650&format=jpg&quality=80&fit=bounds"
              alt="images"
            />
            <p>Box of 100 screws for wood, 6&lsquo;x120&lsquo;</p>
            <div className="counter">
              <button type="button"> - </button>
              <p> 1 </p>
              <button type="button"> + </button>
            </div>
          </figure>
          <div className="priceProduct">
            <button type="button">
              <img
                src="https://img.icons8.com/material-outlined/12/d4d4d4/pin.png"
                alt="aside"
              />
              set aside
            </button>
            <button type="button">
              <img
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/12/d4d4d4/external-delete-multimedia-kiranshastry-solid-kiranshastry.png"
                alt="delete"
              />
              Delete
            </button>
            <p>27.67€</p>
          </div>
        </section>
        <section className="product">
          <figure>
            <img
              src="https://media.adeo.com/marketplace/LMFR/80131114/52972e10-e640-4b06-8877-33a841bb66f6.jpeg?width=650&height=650&format=jpg&quality=80&fit=bounds"
              alt="images"
            />
            <p>Box of 5kg of flat head nails</p>
            <div className="counter">
              <button type="button"> - </button>
              <p> 1 </p>
              <button type="button"> + </button>
            </div>
          </figure>
          <div className="priceProduct">
            <button type="button">
              <img
                src="https://img.icons8.com/material-outlined/12/d4d4d4/pin.png"
                alt="aside"
              />
              set aside
            </button>
            <button type="button">
              <img
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/12/d4d4d4/external-delete-multimedia-kiranshastry-solid-kiranshastry.png"
                alt="delete"
              />
              Delete
            </button>
            <p>27.30€</p>
          </div>
        </section>
      </ProductStyle>
    </>
  );
}
