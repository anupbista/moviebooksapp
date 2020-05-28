import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Theme } from "./style";
import Axios from "axios";
import { GlobalContext } from '../../../contexts/GlobalContext';
import EmptyState from '../../shared/empty/index';

export default function UpcomingMovies() {

    const [upcomingMovies, setupcomingMovies] = useState([]);
    const { toggleLoading } = useContext(GlobalContext);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        toggleLoading(true)
        const res = await Axios.get(`https://ent-api-dev.herokuapp.com/api/v1/movies/upcoming`)
        setupcomingMovies(res.data);
        toggleLoading(false)
    };

    return (
        <Container fluid>
            <div className="clearfix mt-5 mb-2">
                <h4 className="float-left">Upcoming Movies</h4>
            </div>
            <Row>
                {upcomingMovies.length > 0 ? upcomingMovies.map(function (movie) {
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
                }): <EmptyState />}
            </Row>
        </Container>
    );
}