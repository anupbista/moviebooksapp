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
const NowPlaying= React.lazy(() => import("./components/HomePage/nowplaying"));
const PopularBooks= React.lazy(() => import("./components/HomePage/popularbooks"));
const PopularGames= React.lazy(() => import("./components/HomePage/populargames"));
const PopularChannel= React.lazy(() => import("./components/HomePage/popularchannel"));
const SingleMoviePage = React.lazy(() => import("./components/singlePage"));
function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={"loading  ....."}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/" exact component={NowPlaying} />
          <Route path="/" exact component={PopularBooks} />
          <Route path="/" exact component={PopularGames} />
          <Route path="/" exact component={PopularChannel} />
          <Route path="/movies/:id" component={SingleMoviePage} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
