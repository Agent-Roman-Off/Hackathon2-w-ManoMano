import ProductStyle from './style';

export default function Product() {
  return (
    <>
      <ProductStyle>
        <section className="product">
          <figure>
            <img
              src="https://thumbs.dreamstime.com/b/blue-paint-can-4216779.jpg"
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
              src="https://m.media-amazon.com/images/I/81CAvlu23+S._AC_SX355_.jpg"
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
              src="https://www.bricoman.fr/pub/media/catalog/product/2/9/a/d/vis_tete_fraisee_empreinte_torx_x_mm_pieces_acier_inoxydable_spax_739473_picture_01.jpg?width=400&height=400&canvas=400:400&quality=80&bg-color=255,255,255&fit=bounds"
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
              src="https://assets.mitre10.co.nz/sys-master/productimages/h27/h37/9038652276766/293063xlg.jpg"
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
