import { CharacterCardWrapper } from "./styles";
import { ICharacterCard } from "shared/interfaces/components/Characters/CharacterCard";

export const CharacterCard: React.FC<ICharacterCard> = (
  props: ICharacterCard
) => {
  const { birth_year, name, setSelectedCharacter, homeworld, starships } =
    props;

  const setSelectedCharacterHandler = () => {
    window.scrollTo(0, 0);
    setSelectedCharacter({ homeworld, starships, name });
  };

  return (
    <CharacterCardWrapper onClick={setSelectedCharacterHandler}>
      <p>Name: {name}</p>
      <p>Year of birth: {birth_year}</p>
    </CharacterCardWrapper>
  );
};
