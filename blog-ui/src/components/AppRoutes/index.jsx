import { Route, Routes } from "react-router-dom";
import routes from "../../routes";

// import UserLayout from "../../layout/UserLayout";
// import { DrawerProvider } from "../../contexts/DrawerContext";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route>
          {routes.map((route) => {
            const Component = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Component />}
              />
            );
          })}
        </Route>
      </Routes>
      {/* <DrawerProvider /> */}
    </>
  );
}

export default AppRoutes;
