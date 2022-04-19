import { ICharacter } from "../../../../dto/ICharacter"

export interface ISingleEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: ICharacter[]
    url: string

}