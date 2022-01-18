import { Navigate, RouteObject } from "react-router-dom";
import { Movies } from "pages/Movies";
import { CHARACTERS, INSTANCE, MOVIES, SELECTED_MOVIE } from "./paths";
import { Characters } from "pages/Characters";
import { FallbackPage } from "core/components/404";
import { SelectedMovie } from "pages/SelectedMovie";
import { Layout } from "core/components/Layout";

export const routing: RouteObject[] = [
  {
    path: INSTANCE,
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={MOVIES} /> },
      { path: MOVIES, element: <Movies /> },
      { path: SELECTED_MOVIE, element: <SelectedMovie /> },
      { path: CHARACTERS, element: <Characters /> },
      { path: "*", element: <FallbackPage /> },
    ],
  },
];
