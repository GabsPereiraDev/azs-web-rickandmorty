import { all, takeLatest } from "redux-saga/effects";
import { FIND_CHARACTERS } from "../enum/actions.enum";
import { searchCharacters } from "./fuctions/searchCharacter";


export default all([
    takeLatest(FIND_CHARACTERS, searchCharacters),
])