
import {INSERT_EPISODE_ID } from "../enum/actions.enum";

export function insertEpisodeId(episode: object) {
    return {
        type: INSERT_EPISODE_ID,
        payload: {
            episode: episode
        }
    }
}