import "../../../styles/HeroSection.css";
import { Carousel } from "antd";

import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";
import image3 from "../../../assets/images/image3.jpg";
import image4 from "../../../assets/images/image4.jpg";


import { Link } from "react-router";

function HeroSection() {

  return (
    <section className="content">
      <div className="main-text">
        <h1>
          FIND CLOTHES
          <br />
          THAT MATCHES
          <br />
          YOUR STYLE
        </h1>

        <p className="description">
          Browse through our diverse range of garments designed for your style.
        </p>

        <Link to="/login">
          <button className="shop-btn">Shop Now</button>
        </Link>

        <div className="counting">
          <div>
            <h2>200+</h2>
            <p>International Brands</p>
          </div>

          <div>
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>

          <div>
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="main-image">
  <Carousel autoplay autoplaySpeed={4000}>

    <div>
      <img src={image1} alt="banner" className="carousel-image" />
    </div>

    <div>
      <img src={image2} alt="banner" className="carousel-image" />
    </div>

    <div>
      <img src={image3} alt="banner" className="carousel-image" />
    </div>

    <div>
      <img src={image4} alt="banner" className="carousel-image" />
    </div>

  </Carousel>
</div>
    </section>
  );
}

export default HeroSection;
