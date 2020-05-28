import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Theme } from "./style";
import { GlobalContext } from '../../../contexts/GlobalContext';

export default function Movie(props) {
  const movieId = props.match.params.id;
  const [movie, setMovie] = useState({ genre: [] });
  const { toggleLoading } = useContext(GlobalContext);
  useEffect(() => {
    toggleLoading(true)
    Axios.get(`https://ent-api-dev.herokuapp.com/api/v1/movies/${movieId}`)
      .then((res) => {
        setMovie(res.data)
        toggleLoading(false)
      })
      .catch((err) => console.error(err));
  }, [movieId, props.match.params.id]);

  return (
    <Theme>
      <Container className="mt-5" fluid>
        <Row>
          <Col md="4">
            <img src={movie.imagepath} alt="" />
          </Col>
          <Col md="8">
            <h2>{movie.name}</h2>
            <p align="justify">{movie.description}</p>
            <ul>
              <li>Rating: {movie.rating}</li>
              <li>Released date: {movie.releasedate}</li>
              <li>Country: {movie.country}</li>
              <li>
                Genre:
                {movie.genre.map((genre) => {
                  return <span key={genre.id}>{genre.name}</span>;
                })}
              </li>
            </ul>
            <a
              target="_blank"
              className="btn btn-success mr-3"
              href={movie.downloadlink}
            >
              {movie.downloadtext}
            </a>
            <a
              target="_blank"
              className="btn btn-warning"
              href={movie.watchlink}
            >
              {movie.watchtext}
            </a>
          </Col>
        </Row>
      </Container>
    </Theme>
  );
}
