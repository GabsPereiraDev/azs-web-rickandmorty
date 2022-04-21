import { INSERT_FAVORITES } from "../enum/actions.enum";

export function insertFavorite(favorite: object) {
    return {
        type: INSERT_FAVORITES,
        payload: { favorite }
    }
}