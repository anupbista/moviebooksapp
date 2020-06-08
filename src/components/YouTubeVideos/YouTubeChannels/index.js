import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Theme } from "./style";
import Axios from "axios";
import EmptyState from "../../shared/empty/index";
import ReactPaginate from "react-paginate";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function YouTubeChannels() {
  const [youtubeChannels, setyoutubeChannels] = useState([]);
  const [page, setPage] = useState({
    perPage: 15,
    currentPage: 0,
  });
  const [pageCount, setPageCount] = useState(0);
  const { loading, toggleLoading } = useContext(GlobalContext);
  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    toggleLoading(true);
    const res = await Axios.get(
      `https://ent-api-dev.herokuapp.com/api/v1/youtubechannels?&page=${
        page.currentPage + 1
      }&limit=${page.perPage}`
    );
    setyoutubeChannels(res.data.data);
    setPageCount(res.data.count / 15);
    toggleLoading(false);
  };

  const handlePageChange = (e) => {
    const selectedPage = e.selected;
    setPage({
      ...page,
      currentPage: selectedPage,
    });
  };
  return (
    <Theme>
      {!loading ? (
        <Container fluid>
          <div className="clearfix mt-5 mb-5">
            <h4 className="float-left" className="title">
              Youtube Channels
            </h4>
          </div>
          <Row>
            {youtubeChannels.length > 0 ? (
              youtubeChannels.map(function (channel) {
                return (
                  <Col md={2} key={channel.id} className="list-item">
                    <a href={channel.channellink} target="_blank">
                      <Card>
                        <Card.Img variant="top" src={channel.imagepath} />
                        <Card.Body className="ellipsis">
                          <span href={channel.channellink}>
                            {" "}
                            {channel.name}
                          </span>
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                );
              })
            ) : (
              <EmptyState />
            )}
          </Row>
          <Row className="justify-content-center">
            {youtubeChannels.length > 0 ? (
              <ReactPaginate
                previousLabel={<FaAngleLeft />}
                nextLabel={<FaAngleRight />}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                forcePage={page.currentPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            ) : null}
          </Row>
        </Container>
      ) : null}
    </Theme>
  );
}
