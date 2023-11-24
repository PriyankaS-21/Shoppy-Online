import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { useState } from "react";

export default function Cart() {
  const { cartItems, data, removeAllFromCart } = useShoppingCart();
  const [showAlert, setShowAlert] = useState(false);
  const handleButtonClick = () => {
    setShowAlert(true);
    removeAllFromCart();
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Cart</h3>
        {showAlert && (
          <div
            className="alert alert-success ms"
            role="alert"
            style={{ width: "200px", height: "30px" }}
          >
            <div style={{ fontSize: "14px", marginTop: "-10px" }}>
              Successfully Purchased!!
            </div>
          </div>
        )}
      </div>
      <div style={{ height: "56vh", overflowY: "auto", overflowX: "hidden" }}>
        <Stack className="g-1">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </div>{" "}
      <div className="fw-bold fs-5 text-end mt-2">
        Total{": "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = data.find((i) => i.id == cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
      <Button
        variant="info"
        className="mx-auto d-block mt-2" // Center the button and make it block-level
        style={{ maxWidth: "250px", width: "100%" }} // Set max-width and width
        onClick={handleButtonClick}
        disabled={cartItems.length == 0}
      >
        Buy Now
      </Button>
    </>
  );
}
