import { Link } from "react-router-dom";
import { IEpisode } from "../../redux/modules/episodes/dto/IEpisode";
import { Container } from "./style";

export function EpisodeUI({ name, episode, air_date, characters, id }: IEpisode) {
    return (
        <Container>
            <Link to={`/episode/${id}`}>
   
                    <h4>{name} - Episodio: {episode}</h4>
                    <p>Participações total: {characters.length}</p>
                    <strong>{air_date}</strong>
      
            </Link>
        </Container>

    )
}