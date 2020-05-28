import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Theme } from "./style";
import Axios from "axios";
import EmptyState from "../shared/empty";

export default function Movies(props) {
  const search = props.location.state?.search
    ? props.location.state.search
    : "";
  const genre = props.match.params?.id ? props.match.params.id : "";
  const country = props.match.params?.countryname
    ? props.match.params.countryname
    : "";

    const [latestMovies, setlatestMovies] = useState([]);
    
    const fetchData = async () => {
        const res = await Axios.get(
          `https://ent-api-dev.herokuapp.com/api/v1/movies?search=${search}&genre=${genre}&country=${country}`
        );
        setlatestMovies(res.data);
      };
      
    useEffect(() => {
        fetchData();
    }, [search, genre, country]);

  useEffect(() => {
    fetchData();
  }, [search, genre]);

    return (
        <Container fluid>
            <div className="clearfix mt-5 mb-2">
                <h4 className="float-left">Movies</h4>
            </div>
            <Row>
                {latestMovies.length > 0 ? latestMovies.map(function (movie) {
                    return (
                        <Col md={2} key={movie.id} className="list-item">
                            <Link to={`/movies/${movie.id}`}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={movie.imagepath}
                                    />
                                    <Card.Body>
                                        <span>{movie.name}</span>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    );
                }): <EmptyState /> }
            </Row>
        </Container>)
}
