import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import Grouth from "../../images/Infinity Growth.png";
import cart from "../../images/cart.png";
import NavbarSearchHook from "../../hook/search/navbar-search-hook";
import GetAllUserCart from "../../hook/cart/get-all-user-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarLogin = () => {
  const [OnChangeSearch, searchWord] = NavbarSearchHook();
  let word = "";
  if (localStorage.getItem("searchWord") != null) {
    word = localStorage.getItem("searchWord");
  }
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user-email");
    setUser("");
  };
console.log(user)
const [itemsNum , cartItems] = GetAllUserCart();
  return (
    <Navbar  variant="light" className="bg-body-tertiary mb-3 na "   expand="sm">
      <Container>
    
      <Navbar.Brand>
          <a href="/">
            <img src={Grouth} className="logo" />
          
                 </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <FormControl
            value={word}
            onChange={OnChangeSearch}
            type="search"
            placeholder="Search..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {user != "" ? (
              <NavDropdown
                className=" nav-text d-flex mt-3  justify-content-center"
                title={user.name}
                id="basic-nav-dropdown"
              >
                
                {
                  user.role === "admin" ? (<NavDropdown.Item href="/admin/allproducts">
                    Admin Dashboard  
                  </NavDropdown.Item>):(<NavDropdown.Item href="/user/profile">
                    Profile 
                  </NavDropdown.Item>)
                }
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut} href="/">
                   LogOut
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                href="/login"
                className=" d-flex mt-3 me-1 justify-content-center"
              >
                <i class="fa-solid fa-user dark fs-4"></i>
             
              </Nav.Link>
            )}

            <Nav.Link
              href="/cart"
              className=" position-relative d-flex mt-3 mx-5  justify-content-center"
              style={{ color: "white" }}
            >
             <i class="fa-solid fa-cart-shopping  dark fs-4  "></i>
            
              <span className="position-absolute top-5 start-0 translate-middle badge rounded-pill bg-primary">
                {itemsNum || 0}
              </span>
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
