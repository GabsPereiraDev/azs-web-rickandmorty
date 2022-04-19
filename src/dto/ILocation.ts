import { ICharacter } from "./ICharacter"

export interface ILocation {
    id: string
    name: string
    type: string
    dimension: string
    residents: ICharacter[]
    created: string
}