/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = React.lazy(() => import("./components/HomePage"));
const LatestMovies = React.lazy(() =>
  import("./components/HomePage/LatestMovies")
);
const LatestBooks = React.lazy(() =>
  import("./components/HomePage/LatestBooks")
);
// Movies Section
const Movie = React.lazy(() => import("./components/Movies/Movie"));
const PopularMovies = React.lazy(() =>
  import("./components/Movies/PopularMovies")
);
const UpcomingMovies = React.lazy(() =>
  import("./components/Movies/UpcomingMovies")
);
const TopratedMovies = React.lazy(() =>
  import("./components/Movies/TopratedMovies")
);
const Movies = React.lazy(() => import("./components/Movies"));

// Books Section

const Books = React.lazy(() => import("./components/Books"));
const Book = React.lazy(() => import("./components/Books/Book"));
const PopularBooks = React.lazy(() =>
  import("./components/Books/PopularBooks")
);

const TopratedBooks = React.lazy(() =>
  import("./components/Books/TopratedBooks")
);

function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={"loading  ....."}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/genre/:id" exact component={Movies} />
          <Route path="/movies/popular" exact component={PopularMovies} />
          <Route path="/movies/upcoming" exact component={UpcomingMovies} />
          <Route path="/movies/toprated" exact component={TopratedMovies} />
          <Route path="/movies/:id" component={Movie} />

          <Route path="/books" exact component={Books} />
          <Route path="/books/popular" exact component={PopularBooks} />
          <Route path="/books/toprated" exact component={TopratedBooks} />
          <Route path="/books/:id" component={Book} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
