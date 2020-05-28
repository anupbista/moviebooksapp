import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Theme } from "./style";
import { GlobalContext } from '../../../contexts/GlobalContext';

export default function Book(props) {
  const bookId = props.match.params.id;
  const [book, setBook] = useState({ genre: [] });
  const { toggleLoading } = useContext(GlobalContext);
  useEffect(() => {
    toggleLoading(true)
    Axios.get(`https://ent-api-dev.herokuapp.com/api/v1/books/${bookId}`)
      .then((res) => {
        setBook(res.data)
        toggleLoading(false)
      })
      .catch((err) => console.error(err));
  }, [bookId, props.match.params.id]);

  return (
    <Theme>
      <Container className="mt-5" fluid>
        <Row>
          <Col md="4">
            <img src={book.imagepath} alt="" />
          </Col>
          <Col md="8">
            <h2>{book.name}</h2>
            <p align="justify">{book.description}</p>
            <ul>
              <li>Rating: {book.rating}</li>
              <li>Released date: {book.releasedate}</li>
              <li>Author: {book.author}</li>
              <li>Publisher: {book.publisher}</li>
            </ul>
            <a
              target="_blank"
              className="btn btn-success mr-3"
              href={book.downloadlink}
            >
              {book.downloadtext}
            </a>
            <a target="_blank" className="btn btn-warning" href={book.readlink}>
              {book.readtext}
            </a>
          </Col>
        </Row>
      </Container>
    </Theme>
  );
}
