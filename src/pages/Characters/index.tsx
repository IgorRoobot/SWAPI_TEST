import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "core/context";
import {
  CharactersSection,
  GoBackBtn,
  ListItem,
  MovieListSection,
  SelectedCharacterSection,
  Wrapper,
} from "./styles";
import { CharacterCard } from "./components/CharacterCard";
import { SelectedCharacter } from "./components/SelectedCharacter";
import { ISelectedCharacter } from "shared/interfaces/components/Characters/Characters";
import { ICharacter, IMovie } from "shared/interfaces/common";
import { Loader } from "shared/components/Loader";
import { Skeleton } from "shared/components/Skeleton";

export const Characters = () => {
  const [globalState, { getAllMovies, getAsyncUrls, getCharactersByMovieId }] =
    useContext(MoviesContext);
  const [selectedMovieUrl, setSelectedMovieUrl] = useState<string>("");
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const defaultSelectedCharacter = {
    starships: [],
    homeworld: "",
    name: "",
  };
  const [selectedCharacter, setSelectedCharacter] =
    useState<ISelectedCharacter>(defaultSelectedCharacter);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const selectMovieUrlHandler = (url: string) => {
    setSelectedCharacter(defaultSelectedCharacter);
    setSelectedMovieUrl(url);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    (async () => {
      if (!globalState.movies.length) {
        setIsLoading(true);
        await getAllMovies();
        setIsLoading(false);
      }
    })();
  }, [globalState]);

  useEffect(() => {
    (async () => {
      if (selectedMovieUrl) {
        setIsLoading(true);
        const charactersData = await getCharactersByMovieId(selectedMovieUrl);
        await getAsyncUrls(charactersData, "characters");
        if (globalState.characters) {
          setCharacters(
            globalState.characters.filter(({ url }: ICharacter) =>
              charactersData.includes(url)
            )
          );
        }
        setIsLoading(false);
      }
    })();
  }, [selectedMovieUrl, globalState]);

  return (
    <Wrapper>
      <MovieListSection>
        <h3>Select a movie to see characters</h3>
        {isLoading && !selectedMovieUrl ? (
          <>
            {new Array(7).fill("").map((_, index) => (
              <Skeleton
                key={index}
                width={index % 2 === 0 ? "65%" : "70%"}
                height="16px"
                margin="0 0 12px 0"
              />
            ))}
          </>
        ) : (
          <>
            <ul>
              {globalState.movies.map(({ title, url }: IMovie, index) => (
                <ListItem
                  key={index}
                  isactive={selectedMovieUrl === url}
                  onClick={() => selectMovieUrlHandler(url)}
                >
                  {title}
                </ListItem>
              ))}
            </ul>
          </>
        )}
      </MovieListSection>
      {selectedCharacter.name ? (
        <SelectedCharacterSection>
          <GoBackBtn
            onClick={() => setSelectedCharacter(defaultSelectedCharacter)}
          >
            Back
          </GoBackBtn>
          <SelectedCharacter
            starshipsUrl={selectedCharacter.starships}
            name={selectedCharacter.name}
            homeworldUrl={selectedCharacter.homeworld}
          />
        </SelectedCharacterSection>
      ) : (
        <CharactersSection>
          {isLoading && selectedMovieUrl ? (
            <Loader />
          ) : (
            characters.map(
              ({ name, birth_year, homeworld, starships }, index) => (
                <CharacterCard
                  key={index}
                  birth_year={birth_year}
                  name={name}
                  homeworld={homeworld}
                  starships={starships}
                  setSelectedCharacter={setSelectedCharacter}
                />
              )
            )
          )}
        </CharactersSection>
      )}
    </Wrapper>
  );
};
