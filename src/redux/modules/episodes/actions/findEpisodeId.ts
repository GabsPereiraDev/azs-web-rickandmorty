import {  FIND_EPISODE_ID } from "../enum/actions.enum";

export function findEpisodeId(id: string) {
    return {
        type: FIND_EPISODE_ID,
        payload: {
            id
        }
    }
}