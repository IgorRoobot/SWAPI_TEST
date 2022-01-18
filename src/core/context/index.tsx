import { createContext, useState } from "react";
import { FILMS_URL } from "../api/constants";
import {
  ICharacter,
  IMovie,
  IPlanet,
  ISpecies,
  IStarship,
  IVehicle,
} from "shared/interfaces/common";

interface IContextMethods {
  getMovieById: (id: string) => IMovie;
  getAllMovies: () => Promise<void>;
  getAsyncUrls: (ids: string[], key: keyof IGlobalState) => void;
  getCharactersByMovieId: (id: string) => Promise<string[]>;
  getAsyncResponseByUrl: (url: string) => Promise<any>;
}

interface IGlobalState {
  movies: IMovie[];
  planets: IPlanet[];
  starships: IStarship[];
  species: ISpecies[];
  vehicles: IVehicle[];
  characters: ICharacter[];
}

export const MoviesContext = createContext<[IGlobalState, IContextMethods]>(
  [] as unknown as [IGlobalState, IContextMethods]
);

export const MoviesProvider = ({
  children,
}: {
  children: JSX.Element | null;
}) => {
  const [globalState, setGlobalState] = useState<IGlobalState>({
    movies: [],
    planets: [],
    starships: [],
    species: [],
    vehicles: [],
    characters: [],
  });

  const filterHelpFunction = (array: string[], key: keyof IGlobalState) =>
    array.filter(
      (url) => !globalState[key].map(({ url }) => url).includes(url)
    );

  const getAsyncFilmsById = async (id: string) => {
    const response = await fetch(`${FILMS_URL}${id}`);
    return await response.json();
  };

  const getAsyncResponseByUrl = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
  };

  const getMovieById = (id: string) => {
    return (
      globalState.movies.filter(({ url }) => +url.substr(-2, 1) === +id)[0] ||
      getAsyncFilmsById(id)
    );
  };

  const getCharactersByMovieId = async (id: string) => {
    const response = await getAsyncResponseByUrl(id);
    return response.characters;
  };

  const getAsyncUrls = (ids: string[], key: keyof IGlobalState) => {
    const tempArray: typeof globalState[keyof typeof globalState] = [];

    filterHelpFunction(ids, key).forEach(async (url) => {
      const data = await getAsyncResponseByUrl(url);
      tempArray.push(data);
      if (tempArray.length === filterHelpFunction(ids, key).length) {
        setGlobalState((prev) => ({
          ...prev,
          [key]: [...prev[key], ...tempArray],
        }));
      }
    });
  };

  const getAllMovies = async () => {
    const response = await fetch(FILMS_URL);
    const { results } = await response.json();
    setGlobalState((prev) => ({ ...prev, movies: results }));
  };

  return (
    <MoviesContext.Provider
      value={[
        globalState,
        {
          getMovieById,
          getAllMovies,
          getAsyncUrls,
          getCharactersByMovieId,
          getAsyncResponseByUrl,
        },
      ]}
    >
      {children}
    </MoviesContext.Provider>
  );
};
