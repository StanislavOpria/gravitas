import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { routeList } from "./modules/@common/constants/routes";
import Button from "./modules/@common/components/Button/Button";
import Menu from "./modules/@common/components/Menu/Menu";

function App() {
  return (
    <div>
      <Button>Узнать больше</Button>
      <Button component={Link} to="/news">
        Узнать больше
      </Button>
      <Menu />
      <Routes>
        {routeList.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
