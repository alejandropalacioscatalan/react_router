import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="danger">
      <Container className="justify-content-start">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <Link to="/" className="text-white ms-3 text-decoration-none">
              🏠 Home
            </Link>
            <Link
              to="/Contact"
              className="text-white ms-3 text-decoration-none"
            >
              🗒️ Contacto
            </Link>
          </div>
          <div>
            <Link to="/" className="text-white ms-3 text-decoration-none">
              Happy Cake 🍰
            </Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
