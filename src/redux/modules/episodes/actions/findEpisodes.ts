import { FIND_EPISODES } from "../enum/actions.enum";

export function findEpisodes() {
    return {
        type: FIND_EPISODES,
        payload: {}
    }
}