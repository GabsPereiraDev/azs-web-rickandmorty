import { ICharacter } from "./ICharacter"

export interface IEpisode {
    id: string
    name: string
    air_date: string
    episode: string
    characters: ICharacter[]
    created: string
}