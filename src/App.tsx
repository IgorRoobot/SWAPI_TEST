import React from "react";
import { useRoutes } from "react-router-dom";
import { routing } from "./routing";
import { MoviesProvider } from "./core/context";

function App() {
  const renderRoutes = useRoutes(routing);
  return <MoviesProvider>{renderRoutes}</MoviesProvider>;
}

export default App;
