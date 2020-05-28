import React, { useContext, Fragment } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from 'react-loader-spinner'

const HomePage = React.lazy(() => import("../components/HomePage"));
const LatestMovies = React.lazy(() =>
  import("../components/HomePage/LatestMovies")
);
const LatestBooks = React.lazy(() =>
  import("../components/HomePage/LatestBooks")
);
// Movies Section
const Movie = React.lazy(() => import("../components/Movies/Movie"));
const PopularMovies = React.lazy(() =>
  import("../components/Movies/PopularMovies")
);
const UpcomingMovies = React.lazy(() =>
  import("../components/Movies/UpcomingMovies")
);
const TopratedMovies = React.lazy(() =>
  import("../components/Movies/TopratedMovies")
);
const Movies = React.lazy(() => import("../components/Movies"));

// Books Section

const Books = React.lazy(() => import("../components/Books"));
const Book = React.lazy(() => import("../components/Books/Book"));
const PopularBooks = React.lazy(() =>
  import("../components/Books/PopularBooks")
);

const TopratedBooks = React.lazy(() =>
  import("../components/Books/TopratedBooks")
);
const Layout = props => {
  const { loading } = useContext(GlobalContext)
  return (
    <Fragment>
      {loading ? <div className="loader">
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100} />
      </div> : null}
      <Router>
        <Navbar />
        <React.Suspense fallback={"loading  ....."}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/genre/:id" exact component={Movies} />
            <Route path="/movies/country/:countryname" exact component={Movies} />
            <Route path="/movies/popular" exact component={PopularMovies} />
            <Route path="/movies/upcoming" exact component={UpcomingMovies} />
            <Route path="/movies/toprated" exact component={TopratedMovies} />
            <Route path="/movies/:id" component={Movie} />

            <Route path="/books" exact component={Books} />
            <Route path="/books/popular" exact component={PopularBooks} />
            <Route path="/books/toprated" exact component={TopratedBooks} />
            <Route path="/books/:id" component={Book} />
            <Redirect to="/" />
          </Switch>
        </React.Suspense>
      </Router>
    </Fragment>
  );
};

export default Layout;
