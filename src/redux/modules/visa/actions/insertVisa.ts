import { INSERT_VISA } from "../enum/actions.enum";

export function insertFavorite(favorite: object) {
    return {
        type: INSERT_VISA,
        payload: { favorite }
    }
}