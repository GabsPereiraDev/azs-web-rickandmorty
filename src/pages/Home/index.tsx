
import { useDispatch } from "react-redux"
import { Episodes } from "../../components/Episodes";
import { findCharacters } from "../../redux/modules/characters/actions/findCharacters";

import { findEpisodes } from "../../redux/modules/episodes/actions/findEpisodes";

export function Home() {


    const dispatch = useDispatch();


    dispatch(findEpisodes())
    dispatch(findCharacters())


    return (
        <div>
            <Episodes />
        </div>
    )
}