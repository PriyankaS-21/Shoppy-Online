import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, data } = useShoppingCart();

  const item = data.find((i) => i.id === id);
  if (item == null) return "";

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="bg-light bg-gradient shadow-lg mb-3"
      style={{ padding: "10px", margin: "20px" }}
    >
      <img
        src={item.image}
        style={{ width: "125px", height: "100px", objectFit: "contain" }}
      />
      <div className="me-auto">
        <div className="fs-6">
          {item.title.split(" ").slice(0, 2).join(" ")}
          {quantity > 1 && (
            <span className="ms-2 text-muted" style={{ fontSize: "14px" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "14px" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
