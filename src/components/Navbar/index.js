/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { NavWrapper } from "./style";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function Navbars() {
  let history = useHistory();
  const countries = [
    {
      name: "United States",
    },
    {
      name: "India",
    },
    {
      name: "South Korea",
    },
    {
      name: "Nepal",
    },
    {
      name: "United Kingdom",
    },
    {
      name: "Japan",
    },
    {
      name: "Russia",
    },
    {
      name: "Canada",
    },
    {
      name: "Thailand",
    },
    {
      name: "China",
    },
  ];
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
                <Nav.Link className="dropdown-item" as={Link} to="/movies">
                  All
                </Nav.Link>
                <Nav.Link as={Link} to="/movies/popular">
                  Popular
                </Nav.Link>
                <Nav.Link as={Link} to="/movies/upcoming">
                  Upcoming
                </Nav.Link>
                <Nav.Link as={Link} to="/movies/toprated">
                  Top Rated
                </Nav.Link>
                <DropdownButton title="Country" className="expand-menu" drop="right">
                  {countries.map(function (country) {
                    return (
                      <Dropdown.Item
                        as={Link}
                        key={country.name}
                        to={"/movies/country/" + country.name}
                      >
                        {country.name}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
                <DropdownButton title="Genre" className="expand-menu" drop="right">
                  {genre.map(function (gen) {
                    return (
                      <Dropdown.Item
                        as={Link}
                        key={gen.id}
                        to={"/movies/genre/" + gen.id}
                      >
                        {gen.name}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </NavDropdown>
              <NavDropdown title="Books">
                <Nav.Link as={Link} to="/books">
                  All
                </Nav.Link>
                <Nav.Link as={Link} to="/books/popular">
                  Popular
                </Nav.Link>
                <Nav.Link as={Link} to="/books/toprated">
                  Top Rated
                </Nav.Link>
              </NavDropdown>
              <NavDropdown title="Games">
                <Nav.Link as={Link} to="/games">
                  All
                </Nav.Link>
                <Nav.Link as={Link} to="/games/popular">
                  Popular
                </Nav.Link>
                <Nav.Link as={Link} to="/games/toprated">
                  Top Rated
                </Nav.Link>
                <Nav.Link as={Link} to="/games/category">
                  Category
                </Nav.Link>
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
