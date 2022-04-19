
import { INSERT_EPISODES } from "../enum/actions.enum";

export function insertEpisodes(episodes: object) {
    return {
        type: INSERT_EPISODES,
        payload: {
            episodes: episodes
        }
    }
}