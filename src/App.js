/* eslint-disable no-unused-vars */
import React, { Fragment, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContextProvider from "./contexts/GlobalContext";
import Layout from "./layout/Layout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <GlobalContextProvider>
      <Layout />
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;
