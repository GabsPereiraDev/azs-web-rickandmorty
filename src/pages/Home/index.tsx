
import { useDispatch } from "react-redux"
import { Episodes } from "../../components/Episodes";
import { findEpisodes } from "../../redux/modules/episodes/actions/findEpisodes";

export function Home() {


    const dispatch = useDispatch();


    dispatch(findEpisodes())



    return (
        <div>
            <Episodes />
        </div>
    )
}