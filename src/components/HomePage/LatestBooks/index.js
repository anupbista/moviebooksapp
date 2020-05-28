import React from "react";
import { Container, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainBook } from "./style";

export default function LatestBooks({ book }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <MainBook>
      <Container fluid>
        <div className="clearfix mt-5 mb-2">
          <h4 className="float-left">Latest Books</h4>
          <Link className="float-right text-uppercase" to="/books">
            see all
          </Link>
        </div>
        <Slider {...settings}>
          {book.map(function (book) {
            return (
              <React.Fragment key={book.id}>
                <Link to={`/books/${book.id}`}>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={book.imagepath} />
                      <Card.Body>
                        <span>{book.name}</span>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
              </React.Fragment>
            );
          })}
        </Slider>
      </Container>
    </MainBook>
  );
}
