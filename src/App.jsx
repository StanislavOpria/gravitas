import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeList } from './modules/@common/constants/routes';
import Menu from './modules/@common/components/Menu/Menu';

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        {routeList.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={(<Component />)}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
