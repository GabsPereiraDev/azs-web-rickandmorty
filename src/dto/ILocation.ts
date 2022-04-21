import { ICharacter } from "../redux/modules/characters/dto/ICharacter"

export interface ILocation {
    id: string
    name: string
    type: string
    dimension: string
    residents: ICharacter[]
    created: string
}