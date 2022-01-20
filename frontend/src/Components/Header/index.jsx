import { NavLink } from 'react-router-dom';
import Logo from './logo.png';
import SHeader from './style';

function Header() {
  return (
    <SHeader>
      <section className="logoCont">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="ManoMano" />
        </NavLink>
      </section>
      <input
        className="searchbar"
        type="search"
        placeholder="Rechercher un produit, une marque ou un conseil"
      />
      <section className="logCont">
        <div className="supplyBtn">
          <NavLink to="/resupply">Resupply</NavLink>
        </div>
        <div className="greetCont">
          <p>Bonjour Othmane</p>
          <p>Mon compte</p>
        </div>
        <div className="basketCont">
          <NavLink to="checkout">
            <img src="" alt="basket" />
          </NavLink>
        </div>
      </section>
    </SHeader>
  );
}

export default Header;
