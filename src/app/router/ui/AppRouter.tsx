import {Suspense} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig)
          .map(({path, element}: RouteProps) => (
            <Route
              key={path}
              path={path}
              element={
                <div className="page-wrapper">
                  {element}
                </div>
              }
            />
          ))
        }
      </Routes>
    </Suspense>
  );
};
