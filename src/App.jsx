import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeList } from "./modules/common/constants/routes";

function App() {
  return (
    <Routes>
      {routeList.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense>
              <Component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
