import { MovieList } from "./styles";
import { SingleMovie } from "./components/SingleMovie";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "core/context";

export const Movies = () => {
  const [globalState, { getAllMovies }] = useContext(MoviesContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!globalState.movies.length) {
        setIsLoading(true);
        await getAllMovies();
        setIsLoading(false);
      }
    })();
  }, [globalState]);

  return (
    <MovieList>
      {globalState.movies.map(({ title, opening_crawl, url }, index) => (
        <SingleMovie
          key={index}
          isLoading={isLoading}
          id={+url.substr(-2, 1)}
          title={title}
          opening_crawl={opening_crawl}
        />
      ))}
    </MovieList>
  );
};
