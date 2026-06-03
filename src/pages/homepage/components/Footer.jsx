import "../../../styles/Footer.css";

import visa from "../../../assets/images/visa.png";
import mastercard from "../../../assets/images/mastercard.png";
import paypal from "../../../assets/images/paypal.png";
import applepay from "../../../assets/images/applepay.png";
import googlepay from "../../../assets/images/googlepay.png";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <h2>SHOP.CO</h2>

          <p>
            We have clothes that suit your style and which you're proud to
            wear.
          </p>
        </div>

        <div>
          <h3>COMPANY</h3>

          <ul>
            <li>About</li>
            <li>Feature</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div>
          <h3>HELP</h3>

          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="payment-methods">
          <img src={visa} alt="" />
          <img src={mastercard} alt="" />
          <img src={paypal} alt="" />
          <img src={applepay} alt="" />
          <img src={googlepay} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;