import { ISelectedCharacter } from "./Characters";

export interface ICharacterCard {
  birth_year: string;
  name: string;
  homeworld: string;
  starships: string[];
  setSelectedCharacter: (object: ISelectedCharacter) => void;
}
