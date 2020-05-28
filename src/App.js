/* eslint-disable no-unused-vars */
import React, { Fragment, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContextProvider from './contexts/GlobalContext';
import Layout from './layout/Layout';

function App() {

  return (
    <GlobalContextProvider>
      <Layout />
    </GlobalContextProvider>
  );
}

export default App;
