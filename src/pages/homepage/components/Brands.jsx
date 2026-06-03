import "../../../styles/Brands.css";
import { Link } from "react-router";

export default function Brands() {
  const brands = [
    "VERSACE",
    "ZARA",
    "GUCCI",
    "PRADA",
    "Calvin Klein",
    "H&M",
  ];

  return (
    <div className="brands-section">
      <div className="brands">
      {brands.map((brand) => (
        <Link
          key={brand}
          to={`/brand/${brand}`}
        >
          {brand}
        </Link>
      ))}
    </div>
    </div>
  );
}