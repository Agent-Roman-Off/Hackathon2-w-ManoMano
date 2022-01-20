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
        placeholder="Look for a product, a brand or some advice"
      />
      <section className="logCont">
        <div className="supplyBtn">
          <NavLink to="/resupply">Resupply</NavLink>
        </div>
        <div className="greetCont">
          <p>Hello Othmane</p>
          <p>My Account</p>
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
