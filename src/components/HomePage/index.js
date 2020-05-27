/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import { HomeWrapper } from "./style";
import LatestMovies from "./LatestMovies";
import LatestBooks from "./LatestBooks";

export default function HomePage() {
  const [latestMovies, setlatestMovies] = useState([]);
  const [latestBooks, setlatestBooks] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const allMovies = await Axios.all([
      Axios.get(`https://ent-api-dev.herokuapp.com/api/v1/movies`),
      Axios.get(`https://ent-api-dev.herokuapp.com/api/v1/books`),
    ]);
    setlatestMovies(allMovies[0].data);
    setlatestBooks(allMovies[1].data);
  };

  return (
    <HomeWrapper>
      <LatestMovies movie={latestMovies} />
      <LatestBooks book={latestBooks} />
    </HomeWrapper>
  );
}
