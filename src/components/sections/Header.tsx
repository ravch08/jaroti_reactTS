import { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { Cart, Login, Search, Wishlist, logoDark } from "../utils/helper";

const Header = () => {
  const [isSticky, setIsSticky] = useState("");

  const stickyHandler = () => {
    const stickyClass = window.scrollY > 150 ? "sticky" : "";
    setIsSticky(stickyClass);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHandler);
    return () => window.removeEventListener("scroll", stickyHandler);
  }, []);

  const sticker = `${isSticky} navbar`;

  return (
    <header>
      <div className="topbar">
        <p>ENJOY 15% OFF WITH TWO OR MORE ITEMS & FREE SHIPPING ON ALL ORDERS.</p>
      </div>

      <div className={sticker}>
        <div className="container">
          <div className="header-wrapper">
            <Link to={"/"} className="nav-brand">
              <img src={logoDark} width={120} alt="Jaroti" />
            </Link>

            <nav aria-labelledby="Primary Navigation">
              <ul className="navbar-list">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="aboutus" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="products" className="nav-link">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="categories" className="nav-link">
                    Categories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="contact" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="user-login">
              <Search />
              <Login />
              <Wishlist />
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
