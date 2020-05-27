import React from "react";
import { Container, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainMovie } from "./style";

export default function LatestMovies({ movie }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <MainMovie>
      <Container fluid>
        <div className="clearfix mt-5 mb-2">
          <h4 className="float-left">Latest Movies</h4>
          <Link className="float-right text-uppercase" to="/movies">
            see all
          </Link>
        </div>
        <Slider {...settings}>
          {movie.map(function (movie) {
            return (
              <React.Fragment key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={movie.imagepath} />
                      <Card.Body>
                        <span>{movie.name}</span>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
              </React.Fragment>
            );
          })}
        </Slider>
      </Container>
    </MainMovie>
  );
}
