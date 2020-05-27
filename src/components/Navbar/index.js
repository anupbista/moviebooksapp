/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { NavWrapper } from "./style";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function Navbars() {
  let history = useHistory();
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState([]);

  const fetchGenre = async () => {
    const res = await Axios.get(
      `https://ent-api-dev.herokuapp.com/api/v1/genre`
    );
    setGenre(res.data);
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  const searchChangeHandle = (event) => {
    event.persist(event);
    setSearch(event.target.value);
  };

  const handleClickSearch = () => {
    history.push("/movies", {
      search: search,
    });
  };

  return (
    <NavWrapper>
      <Container fluid>
        <Navbar expand="lg">
          <Link to="/">
            <img className="img" src="/logos/logo-white.png" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto nav-link dropdown-toggle">
              <NavDropdown title="Movies">
                <Nav.Link className="nav-link" as={Link} to="/movies">
                  All
                </Nav.Link>
                <Nav.Link className="nav-link" as={Link} to="/movies/popular">
                  Popular
                </Nav.Link>
                <Nav.Link className="nav-link" as={Link} to="/movies/upcoming">
                  Upcoming
                </Nav.Link>
                <Nav.Link className="nav-link" as={Link} to="/movies/toprated">
                  Top Rated
                </Nav.Link>
                <NavDropdown title="Genre">
                  {genre.map(function (gen) {
                    return (
                      <Nav.Link
                        className="nav-link"
                        as={Link}
                        key={gen.id}
                        to={"/movies/genre/" + gen.id}
                      >
                        {gen.name}
                      </Nav.Link>
                    );
                  })}
                </NavDropdown>
              </NavDropdown>
              <NavDropdown title="Books">
                <Nav.Link className="nav-link" as={Link} to="/books">
                  All
                </Nav.Link>
                <Nav.Link className="nav-link" as={Link} to="/books/popular">
                  Popular
                </Nav.Link>
                <Nav.Link className="nav-link" as={Link} to="/books/toprated">
                  Top Rated
                </Nav.Link>
              </NavDropdown>
              <NavDropdown title="Games">
                <NavDropdown.Item href="#popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="#toprated">Top Rated</NavDropdown.Item>
                <NavDropdown.Item href="#category">Category</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Youtube">
                <NavDropdown.Item href="#popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="#trending">Trending</NavDropdown.Item>
                <NavDropdown.Item href="#popularchannel">
                  Popular Channel
                </NavDropdown.Item>
                <NavDropdown.Item href="#musicvideos">
                  Music Videos
                </NavDropdown.Item>
                <NavDropdown.Item href="#learning">Learning</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search movie..."
                className="mr-sm-2"
                name="search"
                value={search}
                onChange={searchChangeHandle}
              />
              <FaSearch onClick={handleClickSearch} />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </NavWrapper>
  );
}
