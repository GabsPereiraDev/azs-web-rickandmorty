import { INSERT_VISA } from "../enum/actions.enum";

export function insertVisa(favorite: object) {
    return {
        type: INSERT_VISA,
        payload: { favorite }
    }
}