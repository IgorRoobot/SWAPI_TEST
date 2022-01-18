import {
  ImageContainer,
  InfoListSection,
  Information,
  Wrapper,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "core/context";
import {
  IMovie,
  IPlanet,
  ISpecies,
  IStarship,
  IVehicle,
} from "shared/interfaces/common";
import { Loader } from "shared/components/Loader";

export const SelectedMovie = () => {
  const { id } = useParams<{ id: string }>();

  const [globalState, { getMovieById, getAsyncUrls }] =
    useContext(MoviesContext);

  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const [movieState, setMovieState] = useState<{
    planets: IPlanet[] | null;
    starships: IStarship[] | null;
    vehicles: IVehicle[] | null;
    species: ISpecies[] | null;
  }>({
    planets: null,
    starships: null,
    vehicles: null,
    species: null,
  } as const);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await setIsLoading(true);
      const data = await getMovieById(id as string);
      setMovie(data);
      await setIsLoading(false);
    })();
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    const restMovieParams = getRestParamsMovie(movie);
    Object.keys(restMovieParams).forEach((key) => {
      if (restMovieParams[key as keyof typeof restMovieParams]) {
        setMovieState((prev) => ({
          ...prev,
          [key]: [
            ...(
              globalState[key as keyof typeof restMovieParams] as any[]
            ).filter(({ url }: { url: string }) =>
              restMovieParams[key as keyof typeof restMovieParams].includes(url)
            ),
          ],
        }));
      }
    });
    setIsLoading(false);
  }, [movie, globalState]);

  useEffect(() => {
    (async () => {
      if (movie.hasOwnProperty("episode_id")) {
        await setIsLoading(true);
        const restMovieParams = getRestParamsMovie(movie);

        Object.keys(restMovieParams).forEach(async (key) => {
          restMovieParams[key as keyof typeof restMovieParams] &&
            (await getAsyncUrls(
              restMovieParams[key as keyof typeof restMovieParams],
              key as keyof typeof restMovieParams
            ));
        });
        await setIsLoading(false);
      }
    })();
  }, [movie]);

  const getRestParamsMovie = (movie: IMovie) => {
    return (({ starships, vehicles, species, planets, ...rest }) => ({
      starships,
      vehicles,
      species,
      planets,
    }))(movie);
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ImageContainer>
            <img
              src="https://pbs.twimg.com/media/EW7xYmsWoAAu6QD.jpg"
              alt="movie poster"
              width="100%"
            />
          </ImageContainer>
          <Information>
            <h1>{movie?.title}</h1>
            <p>{movie?.release_date}</p>
            <div>
              <p>{movie?.opening_crawl}</p>
            </div>
            <div>
              <p>Producer: {movie?.producer}</p>
              <p>Director: {movie?.director}</p>
            </div>
            <InfoListSection>
              {Object.keys(movieState).map((key, index) => {
                return movieState[key as keyof typeof movieState]?.length ? (
                  <div key={index}>
                    <h3>{key.toUpperCase()}:</h3>
                    <ul>
                      {movieState[key as keyof typeof movieState]?.map(
                        ({ name }, index) => (
                          <li key={`${index}_${name}`}>{name}</li>
                        )
                      )}
                    </ul>
                  </div>
                ) : undefined;
              })}
            </InfoListSection>
          </Information>
        </>
      )}
    </Wrapper>
  );
};
