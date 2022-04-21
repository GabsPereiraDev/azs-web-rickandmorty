import { INSERT_CHARACTERS } from "../enum/actions.enum";

export function insertCharacters(characters: object) {
    return {
        type: INSERT_CHARACTERS,
        payload: { characters }
    }
}