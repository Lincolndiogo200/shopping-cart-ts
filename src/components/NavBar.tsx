import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavBarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
            <path
              fill="#1D1751"
              d="M720.588 215.41H175.815c-.479 0-.844.114-1.293.146l-6.636-32.5c-1.15-5.632-1.284-14.532-4.025-19.711-6.324-11.946-29.871-16.682-41.439-21.677l-57.946-25.022C53.572 111.937 44.063 128 55.063 132.75l45.448 19.625c14.461 6.244 30.679 16.268 46.222 20.477-.09 3.718 1.833 8.619 2.554 12.15l9.055 44.348 4.828 23.644v.095l48.752 238.761a25.26 25.26 0 0 0 1.652 7.995l1.25 6.122 15.32 75.029c.811 3.971 5.101 6.846 8.992 6.846h436.53c12.001 0 12.02-18.65 0-18.65H246.73l-10.447-51.164c2.137.42 4.348.66 6.623.66h.26l421.849-23.627.21-.016c23.012-1.819 27.693-14.891 32.091-42.199l52.508-207.036v-1.163c0-16.121-13.113-29.237-29.236-29.237zm-573.883-43.057c-.001.01.002.022.001.031-3.37-2.473.454-6.072-.001-.031zm532.43 276.311-.168.82c-4.162 25.992-6.279 26.265-15.099 26.962l-421.189 23.59c-4.649-.073-9.454-2.398-11.303-6.04l-.827-4.051v-.086L181.807 251.13c-.109-3.802-.811-7.652-1.493-11.388-.305-1.685-.701-3.866-.929-5.682h541.203c5.505 0 10.044 4.223 10.541 9.6l-51.994 205.004zM399.734 688.82c0-31.06-25.271-56.328-56.328-56.328s-56.328 25.268-56.328 56.328 25.271 56.328 56.328 56.328 56.328-25.268 56.328-56.328zm-94.006 0c0-20.776 16.902-37.678 37.678-37.678 20.777 0 37.678 16.902 37.678 37.678s-16.902 37.678-37.678 37.678c-20.776 0-37.678-16.901-37.678-37.678zM616.109 688.82c0-31.06-25.271-56.328-56.328-56.328-31.058 0-56.328 25.268-56.328 56.328s25.271 56.328 56.328 56.328c31.057 0 56.328-25.268 56.328-56.328zm-94.006 0c0-20.776 16.902-37.678 37.678-37.678 20.777 0 37.678 16.902 37.678 37.678s-16.902 37.678-37.678 37.678c-20.777 0-37.678-16.901-37.678-37.678z"
            />
            <g fill="#1D1751">
              <path d="M445.736 175.951c.106 11.995 18.757 12.024 18.65 0l-.675-76.252c-.106-11.995-18.756-12.024-18.65 0l.675 76.252zM454.499 54.852c-12.001 0-12.021 18.65 0 18.65 12.001 0 12.02-18.65 0-18.65zM563.195 124.23l-53.441 54.395c-8.419 8.569 4.759 21.767 13.187 13.188l53.441-54.395c8.419-8.57-4.759-21.767-13.187-13.188zM594.986 115.11c12.001 0 12.02-18.65 0-18.65-12.001 0-12.02 18.65 0 18.65zM333.108 137.984l54.395 53.441c8.569 8.419 21.767-4.759 13.187-13.188l-54.395-53.441c-8.569-8.419-21.767 4.759-13.187 13.188zM314.663 115.517c12.001 0 12.02-18.65 0-18.65-12.001 0-12.02 18.65 0 18.65z" />
            </g>
            <path
              fill="#83C9EF"
              d="m679.135 448.664-.168.82c-4.162 25.992-6.279 26.265-15.099 26.962l-421.189 23.59c-4.649-.073-9.454-2.398-11.303-6.04l-.827-4.051v-.086L181.807 251.13c-.109-3.802-.811-7.652-1.493-11.388-.305-1.685-.701-3.866-.929-5.682h541.203c5.505 0 10.044 4.223 10.541 9.6l-51.994 205.004z"
            />
            <circle fill="#787EBB" cx="343.406" cy="688.82" r="37.678" />
            <circle fill="#787EBB" cx="559.781" cy="688.82" r="37.678" />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavBarBs>
  );
}
