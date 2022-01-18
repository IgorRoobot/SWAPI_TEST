import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "core/context";
import {
  Header,
  HomeSection,
  InformationSection,
  SelectedCharacterWrapper,
  StarshipsSection,
} from "./styles";
import { IHomeWorld, IStarship } from "shared/interfaces/common";
import { ISelectedCharacter } from "shared/interfaces/components/Characters/SelectedCharacter";
import { Loader } from "shared/components/Loader";

export const SelectedCharacter: React.FC<ISelectedCharacter> = ({
  starshipsUrl,
  homeworldUrl,
  name,
}: ISelectedCharacter) => {
  const [globalState, { getAsyncUrls, getAsyncResponseByUrl }] =
    useContext(MoviesContext);

  const [starships, setStarships] = useState<IStarship[]>([]);
  const [homeWorld, setHomeWorld] = useState<IHomeWorld | null>(null);

  useEffect(() => {
    (async () => {
      await getAsyncUrls(starshipsUrl, "starships");
      const homeWorldResponse = await getAsyncResponseByUrl(homeworldUrl);
      setHomeWorld(homeWorldResponse);
    })();
  }, [starshipsUrl, homeworldUrl]);

  useEffect(() => {
    if (globalState.starships.length) {
      setStarships(
        globalState.starships.filter(({ url }: IStarship) =>
          starshipsUrl.includes(url)
        )
      );
    }
  }, [globalState]);

  return (
    <SelectedCharacterWrapper>
      <Header>
        <h3>{name}</h3>
      </Header>
      <InformationSection>
        {!homeWorld && !starships.length ? (
          <Loader />
        ) : (
          <>
            <HomeSection>
              <h3>Home world: {homeWorld?.name}</h3>
              <ul>
                <li>Diameter: {homeWorld?.diameter || "unknown"}</li>
                <li>Climate: {homeWorld?.climate || "unknown"}</li>
                <li>Terrain: {homeWorld?.terrain || "unknown"}</li>
                <li>Gravity: {homeWorld?.gravity || "unknown"}</li>
              </ul>
            </HomeSection>
            {starships.length ? (
              <>
                <h3>Starships:</h3>
                <StarshipsSection>
                  {starships.map(
                    (
                      { name, cost_in_credits, crew, starship_class, length },
                      index
                    ) => (
                      <div key={index}>
                        <h4>{name}</h4>
                        <ul>
                          <li>
                            Cost in credits: {cost_in_credits || "unknown"}
                          </li>
                          <li>Starship class: {starship_class || "unknown"}</li>
                          <li>Crew: {crew || "unknown"}</li>
                          <li>Length: {length || "unknown"}m</li>
                        </ul>
                      </div>
                    )
                  )}
                </StarshipsSection>
              </>
            ) : (
              ""
            )}
          </>
        )}
      </InformationSection>
    </SelectedCharacterWrapper>
  );
};
