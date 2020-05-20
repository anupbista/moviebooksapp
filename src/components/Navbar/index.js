/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navbar, Nav, Form, FormControl, NavDropdown, Container} from "react-bootstrap";
import { NavWrapper } from "./style";
import { Link} from "react-router-dom";
import { FaSearch, FaSignInAlt } from "react-icons/fa";

export default function Navbars() {
  return (
    <NavWrapper>
      <Container>
        <Navbar expand="lg">
          <Link to="/">
            <img className="img" src="/image/logomain.png" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FaSearch />
              <FormControl
                type="text"
                placeholder="Movie, Books..."
                className="mr-sm-2"
              />
            </Form>
            <Nav className="mr-auto nav-link dropdown-toggle">
              <NavDropdown title="Movies" id="collasible-nav-dropdown">
                <NavDropdown.Item to="/">Now Playing</NavDropdown.Item>
                <NavDropdown.Item href="/">Popular</NavDropdown.Item>
                <NavDropdown.Item href="#upcoming">Upcoming</NavDropdown.Item>
                <NavDropdown.Item href="#toprated">Top Rated</NavDropdown.Item>
                <NavDropdown.Item href="#genre">Genres</NavDropdown.Item>
                <NavDropdown.Item href="#tvshow">TV Shows</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Books" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="#toprated">Top Rated</NavDropdown.Item>
                <NavDropdown.Item href="#genre">Genres</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Games" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="#toprated">Top Rated</NavDropdown.Item>
                <NavDropdown.Item href="#category">Category</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Youtube" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="#trending">Trending</NavDropdown.Item>
                <NavDropdown.Item href="#popularchannel">Popular Channel</NavDropdown.Item>
                <NavDropdown.Item href="#musicvideos">Music Videos</NavDropdown.Item>
                <NavDropdown.Item href="#learning">Learning</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="navbar-nav">
              <a href="#login" className="nav-item login"> <FaSignInAlt /> Sign In</a>
            </div>
            
            
          </Navbar.Collapse>
        </Navbar>
        
      </Container>
    </NavWrapper>

  );
}
