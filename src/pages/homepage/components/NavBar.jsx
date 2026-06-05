import "../../../styles/Header.css";

import contactIcon from "../../../assets/images/contact.png";
import { Link, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import Cart from "./Cart";
import { logout } from "../../../redux/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein", "H&M"];

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    dispatch(logout());
    setSidebarOpen(false);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setShopOpen(false);
    setBrandsOpen(false);
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
          <button
            className="hamburger-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

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

        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={closeSidebar} />
        )}

        <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
          <div className="sidebar-header">
            <span className="sidebar-logo">SHOP.CO</span>
            <button
              className="sidebar-close-btn"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="sidebar-user">
            {isLoggedIn ? (
              <span>👋 Hi, {user?.name || "User"}!</span>
            ) : (
              <span>👋 Welcome, Guest!</span>
            )}
          </div>

          <nav className="sidebar-nav">
            <div className="sidebar-accordion">
              <button
                className="sidebar-accordion-btn"
                onClick={() => setShopOpen((prev) => !prev)}
              >
                Shop
                <span className={`sidebar-arrow ${shopOpen ? "open" : ""}`}>
                  ›
                </span>
              </button>
              {shopOpen && (
                <div className="sidebar-accordion-body">
                  <Link to="/ShopProducts" onClick={closeSidebar} className="sidebar-all-products">All Products</Link>
                  <Link to="/ShopProducts/mens-clothing" onClick={closeSidebar}>Men's Wear</Link>
                  <Link to="/ShopProducts/womens-clothing" onClick={closeSidebar}>Women's Wear</Link>
                  <Link to="/ShopProducts/kids" onClick={closeSidebar}>Kid's Wear</Link>
                  <Link to="/ShopProducts/jewelery" onClick={closeSidebar}>Jewelery</Link>
                  <Link to="/ShopProducts/electronics" onClick={closeSidebar}>Electronics</Link>
                  <Link to="/ShopProducts/bags" onClick={closeSidebar}>Bags</Link>
                  <Link to="/ShopProducts/footwear" onClick={closeSidebar}>Footwear</Link>
                </div>
              )}
            </div>

            <Link className="sidebar-link" to="/" onClick={closeSidebar}>
              On Sale
            </Link>

            <Link className="sidebar-link" to="/newArrival" onClick={closeSidebar}>
              New Arrivals
            </Link>

            <div className="sidebar-accordion">
              <button
                className="sidebar-accordion-btn"
                onClick={() => setBrandsOpen((prev) => !prev)}
              >
                Brands
                <span className={`sidebar-arrow ${brandsOpen ? "open" : ""}`}>
                  ›
                </span>
              </button>
              {brandsOpen && (
                <div className="sidebar-accordion-body">
                  {brands.map((brand) => (
                    <Link
                      key={brand}
                      to={`/brand/${brand}`}
                      onClick={closeSidebar}
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link className="sidebar-link" to="/productcartlist" onClick={closeSidebar}>
              🛒 Cart
            </Link>
          </nav>

          <div className="sidebar-auth">
            {isLoggedIn ? (
              <>
                <Link className="sidebar-auth-btn outline" to="/profile" onClick={closeSidebar}>
                  Manage Profile
                </Link>
                <button className="sidebar-auth-btn danger" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="sidebar-auth-btn filled" to="/login" onClick={closeSidebar}>
                  Sign In
                </Link>
                <Link className="sidebar-auth-btn outline" to="/signup" onClick={closeSidebar}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </aside>
      </header>

      <Outlet />
    </>
  );
}

export default Navbar;