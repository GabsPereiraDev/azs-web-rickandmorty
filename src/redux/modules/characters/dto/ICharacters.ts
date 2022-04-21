import { IInfo } from "../../episodes/dto/Iinfo";
import { ICharacter } from "./ICharacter";

export interface ICharacters{
    info:IInfo;
    results:ICharacter[]
}