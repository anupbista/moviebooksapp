import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Theme } from "./style";
import Axios from "axios";

export default function Movies(props) {
    
    const  search = props.location.state?.search ? props.location.state.search : '';

    const [latestMovies, setlatestMovies] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [search]);

    const fetchData = async () => {
        const res = await Axios.get(`https://ent-api-dev.herokuapp.com/api/v1/movies?search=${search}`)
        setlatestMovies(res.data);
    };

    return (
        <Container fluid>
            <div className="clearfix mt-5 mb-2">
                <h4 className="float-left">Movies</h4>
            </div>
            <Row>
                {latestMovies.map(function (movie) {
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
                })}
            </Row>
        </Container>
    );
}