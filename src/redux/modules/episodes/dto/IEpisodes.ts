import { ISingleEpisode } from "./ISingleEpisode";
import { IInfo } from "./Iinfo";


export interface IEpisodes {
    info: IInfo;
    results: ISingleEpisode[]
}