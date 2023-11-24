import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Store() {
  const { data } = useShoppingCart();
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={4} className="g-3">
        {data.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
