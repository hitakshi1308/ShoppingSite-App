import "../../../styles/Header.css";

import contactIcon from "../../../assets/images/contact.png";
import { Link, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./Cart";
import { logout } from "../../../redux/authSlice";

function Navbar() {
  const dispatch = useDispatch();

  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein", "H&M"];

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    dispatch(logout());
  };

  return (
    <>
      <header>
        <section className="signup-section">
          <div className="signup-link">
            Sign up and get 20% off to your first order.
            <Link to="/signup" className="signup-link-text">
              {" "}
              Sign Up Now
            </Link>
          </div>
        </section>

        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <span>SHOP.CO</span>
            </Link>
          </div>

          <ul className="nav-links">
            <li className="shop-menu">
              <Link to="/ShopProducts">Shop</Link>
              <div className="shop-dropdown">
                <Link to="/ShopProducts/mens-clothing">Men's Wear</Link>

                <Link to="/ShopProducts/womens-clothing">Women's Wear</Link>

                <Link to="/ShopProducts/kids">Kid's Wear</Link>
                <Link to="/ShopProducts/jewelery">Jewelery</Link>
                <Link to="/ShopProducts/electronics">Electronics</Link>
                <Link to="/ShopProducts/bags">Bags</Link>
                <Link to="/ShopProducts/footwear">Footwear</Link>
              </div>
            </li>

            <li>On Sale</li>

            <li>
              <Link to="/newArrival">New Arrivals</Link>
            </li>

            <li className="brand-menu">
              Brands
              <div className="brand-dropdown">
                {brands.map((brand) => (
                  <Link key={brand} to={`/brand/${brand}`}>
                    {brand}
                  </Link>
                ))}
              </div>
            </li>
          </ul>

          <div className="search">
            <input type="text" placeholder="Search Here..." />
          </div>

          <div className="cart-contact">
            <Link to="/productcartlist">
              <Cart />
            </Link>

            <div className="profile-menu">
              <img src={contactIcon} alt="Profile" className="profile-icon" />

              <div className="profile-dropdown">
                {isLoggedIn ? (
                  <>
                    <div className="welcome-text">
                      Welcome, {user?.name || "User"}!
                    </div>

                    <Link to="/profile" className="dropdown-link">
                      Manage Profile
                    </Link>

                    <button
                      className="dropdown-link logout-home"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <div className="welcome-text">Welcome, Guest!</div>

                    <Link to="/login" className="dropdown-link">
                      Sign In
                    </Link>

                    <Link to="/signup" className="dropdown-link">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default Navbar;
