import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Theme } from "./style";
import Axios from "axios";

export default function PopularBooks() {
  const [popularBooks, setpopularBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await Axios.get(
      `https://ent-api-dev.herokuapp.com/api/v1/books/popular`
    );
    setpopularBooks(res.data);
  };

  return (
    <Theme>
      <Container fluid>
        <div className="clearfix mt-5 mb-2">
          <h4 className="float-left">Popular Books</h4>
        </div>
        <Row>
          {popularBooks.map(function (book) {
            return (
              <Col md={2} key={book.id} className="list-item">
                <Link to={`/books/${book.id}`}>
                  <Card>
                    <Card.Img variant="top" src={book.imagepath} />
                    <Card.Body>
                      <span className="linker">{book.name}</span>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Theme>
  );
}
