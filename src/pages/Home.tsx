import Button from "react-bootstrap/esm/Button";
import shoppingImage from "../assets/shopping.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/store");
  };

  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <h2>Welcome to Shoppy😍</h2>
      <br />
      <div className="d-md-flex flex-md-row align-items-center">
        <div className="flex-md-column align-items-md-center">
          <p>
            Discover the latest trends and fashion essentials at <b>Shoppy</b>,
            your go-to destination for stylish clothing. Whether you're
            searching for the perfect outfit for a special occasion or updating
            your everyday wardrobe, we've got you covered.
            <br />
            <br />
            Explore our handpicked selection of featured products, showcasing
            the hottest items of the season. Each product is carefully chosen
            for its quality, style, and affordability.
            <br />
            <br />
            Enjoy a secure and seamless shopping experience at Shoppy. We
            prioritize your satisfaction and safety, providing a secure checkout
            process and hassle-free returns. Your dream wardrobe is just a click
            away.
          </p>
          <br />
          <Button
            variant="info"
            style={{ width: "250px" }}
            onClick={handleButtonClick}
          >
            Shop Now
          </Button>
        </div>
        <img src={shoppingImage} style={{ width: "300px", height: "350px" }} />
      </div>
    </div>
  );
}
