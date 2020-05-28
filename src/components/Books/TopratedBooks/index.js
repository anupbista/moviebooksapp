import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Theme } from "./style";
import Axios from "axios";
import EmptyState from '../../shared/empty/index';

export default function TopratedMovies() {
  const [topratedBooks, settopratedBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await Axios.get(
      `https://ent-api-dev.herokuapp.com/api/v1/books/toprated`
    );
    settopratedBooks(res.data);
  };

  return (
    <Theme>
      <Container fluid>
        <div className="clearfix mt-5 mb-2">
          <h4 className="float-left">Top Rated Books</h4>
        </div>
        <Row>
          {topratedBooks.length > 0 ? topratedBooks.map(function (book) {
            return (
              <Col md={2} key={book.id} className="list-item">
                <Link to={`/books/${book.id}`}>
                  <Card>
                    <Card.Img variant="top" src={book.imagepath} />
                    <Card.Body>
                      <span>{book.name}</span>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          }) : <EmptyState />}
        </Row>
      </Container>
    </Theme>
  );
}
