import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeList } from "./modules/@common/constants/routes";
import Layout from './modules/@common/components/Layout/Layout';

function App() {
  return (


      <Routes>
             <Route path="/" element={<Layout />}>
        {routeList.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
          </Route>
      </Routes>
      

  );
}

export default App;
