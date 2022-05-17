import { SearchBar, LogoImage, NavBar, SeachContainer } from "./styled";
import { Nav, NavDropdown, FormControl } from "react-bootstrap";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export function Header() {
  return (
    <header>
      <NavBar className="navbar navbar-light bg-light" id="navbar-box">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <LogoImage
              src="images/logo-blue-croped.png"
              className="navbar-left"
              alt="Logo Blue Edtech"
            />
          </a>
          <SeachContainer>
            <SearchBar className="d-flex">
              <FormControl
                className="me-2"
                type="search"
                placeholder="Digite algo..."
                style={{ background: "rgba(13, 95, 239, 0.32)" }}
                aria-label="Search"
              />
            </SearchBar>
            <div className="d-flex">
              <FaSearch className="Search-icon">Search</FaSearch>
            </div>
          </SeachContainer>
          <div className="d-flex">
            <Nav.Link href="#action1">Login</Nav.Link>
            <Nav.Link href="#action2">Produtos</Nav.Link>
            <FaShoppingCart
              title="Carrinho"
              id="navbarShoppingCart"
            ></FaShoppingCart>
          </div>
        </div>
      </NavBar>
    </header>
  );
}
