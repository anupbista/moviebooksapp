import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Theme } from "./style";
import Axios from "axios";
import { GlobalContext } from '../../../contexts/GlobalContext';
import EmptyState from '../../shared/empty';

export default function TopratedMovies() {
  const [topratedMovies, settopratedMovies] = useState([]);
  const { toggleLoading } = useContext(GlobalContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    toggleLoading(true)
    const res = await Axios.get(
      `https://ent-api-dev.herokuapp.com/api/v1/movies/toprated`
    );
    settopratedMovies(res.data);
    toggleLoading(false)
  };

  return (
    <Theme>
      <Container fluid>
        <div className="clearfix mt-5 mb-2">
          <h4 className="float-left">Top Rated Movies</h4>
        </div>
        <Row>
          {topratedMovies.length > 0 ? topratedMovies.map(function (movie) {
            return (
              <Col md={2} key={movie.id} className="list-item">
                <Link to={`/movies/${movie.id}`}>
                  <Card>
                    <Card.Img variant="top" src={movie.imagepath} />
                    <Card.Body>
                      <span>{movie.name}</span>
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
