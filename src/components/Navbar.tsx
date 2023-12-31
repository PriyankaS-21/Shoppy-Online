import { Button, Container, Nav, Navbar as NavrbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const { cartQuantity } = useShoppingCart();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/cart");
  };

  const handleLogoButton = () => {
    navigate("/");
  };

  const handleStoreButtonClick = () => {
    navigate("/store");
  };

  return (
    <NavrbarBs sticky="top" className="bg-dark bg-gradient shadow-lg mb-3">
      <Container>
        <img
          src={logo}
          onClick={handleLogoButton}
          style={{ cursor: "pointer" }}
        ></img>
        <Nav className="me-auto fs-2">
          <Nav.Link to={"/"} as={NavLink} className="text-white">
            Shoppy<span className="fs-5">.in</span>
          </Nav.Link>
        </Nav>
        <Button
          style={{
            width: "95px",
            height: "40px",
            position: "relative",
            marginRight: "10px",
          }}
          onClick={handleStoreButtonClick}
          className="d-flex justify-content-between"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-shop-window"
            viewBox="0 0 16 16"
          >
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
          </svg>
          Store
        </Button>
        <Button
          style={{ width: "40px", height: "40px", position: "relative" }}
          variant="outline-light"
          className="rounded-circle"
          onClick={handleButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          {cartQuantity > 0 && (
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "20px",
                height: "20px",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(35%, 20%)",
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </NavrbarBs>
  );
}
