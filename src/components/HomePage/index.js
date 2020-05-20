/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import NowPlaying from "./nowplaying";
import { HomeWrapper } from "./style";
import PopularBooks from "./popularbooks";
import PopularGames from "./populargames";
import PopularChannel from "./popularchannel";

export default function HomePage() {
  const [nowPlaying, setnowPlaying] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRated, settopRated] = useState([]);
  const [popularBooks] = useState([]);
  const [popularGames] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    // let apiKey = "02689249b40636b114a2add6006bff65";
    const allMovies = await Axios.all([
      Axios.get(`https://ent-api-dev.herokuapp.com/api/v1/movies`),
      // Axios.get(
      //   `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      // ),
      // Axios.get(
      //   `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      // ),
    ]);
    setnowPlaying(allMovies[0].data.results);
    // setnowPlaying(allMovies[0].data.results);
    // setpopularMovies(allMovies[1].data.results);
    // settopRated(allMovies[2].data.results);
  };

  return (
    <HomeWrapper>
      <NowPlaying movie={nowPlaying} />
    </HomeWrapper>
  );
}
