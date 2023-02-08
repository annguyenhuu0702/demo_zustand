import React, { Suspense } from "react";
import { route } from "./types/routes";
import { Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes";
import { Spin } from "antd";

const App = () => {
  function showRoutes(routes: route[]): React.ReactElement {
    return (
      <React.Fragment>
        {routes.map((route: route, index: number): React.ReactElement => {
          let Layout = route.layout || React.Fragment;
          const Page = route.element;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </React.Fragment>
    );
  }
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <Spin />
        </div>
      }
    >
      <div className="App">
        <Routes>{showRoutes(publicRoute)}</Routes>
      </div>
    </Suspense>
  );
};

export default App;
