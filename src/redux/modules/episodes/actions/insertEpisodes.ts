import { IEpisodes } from "../dto/IEpisodes";
import { FIND_EPISODES } from "../enum/actions.enum";

export function insertEpisodes(episodes: IEpisodes) {
    return {
        type: FIND_EPISODES,
        payload: {
            episodes
        }
    }
}