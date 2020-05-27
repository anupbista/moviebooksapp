/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = React.lazy(() => import("./components/HomePage"));
const LatestMovies= React.lazy(() => import("./components/HomePage/LatestMovies"));
const LatestBooks= React.lazy(() => import("./components/HomePage/LatestBooks"));

const Movie = React.lazy(() => import("./components/Movies/Movie"));
const PopularMovies = React.lazy(() => import("./components/Movies/PopularMovies"));
const UpcomingMovies = React.lazy(() => import("./components/Movies/UpcomingMovies"));
const TopratedMovies = React.lazy(() => import("./components/Movies/TopratedMovies"));
const Movies = React.lazy(() => import("./components/Movies"));

function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={"loading  ...."}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/genre/:id" exact component={Movies} />
          <Route path="/movies/popular" exact component={PopularMovies} />
          <Route path="/movies/upcoming" exact component={UpcomingMovies} />
          <Route path="/movies/toprated" exact component={TopratedMovies} />
          <Route path="/movies/:id" component={Movie} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
