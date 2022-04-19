import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "./style";

export function EpisodePage() {
    const { id } = useParams<{ id: string }>()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findCategoryProducts(params))
    }, [])
    return (
        <Container>

        </Container>
    )
}