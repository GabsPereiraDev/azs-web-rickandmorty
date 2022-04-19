import { ICharacter } from "../../../../dto/ICharacter"

export interface IEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: ICharacter[]
    url: string

}