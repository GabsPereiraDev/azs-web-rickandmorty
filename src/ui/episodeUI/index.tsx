import { Link } from "react-router-dom";
import { ISingleEpisode } from "../../redux/modules/episodes/dto/ISingleEpisode";
import { Container } from "./style";

export function EpisodeUI({ name, episode, air_date, characters, id }: ISingleEpisode) {
    return (
        <Container key={id}>
            <Link to={`/episode/${id}`}>
   
                    <h4>{name} - Episodio: {episode}</h4>
                    <p>Participações total: {characters.length}</p>
                    <strong>{air_date}</strong>
      
            </Link>
        </Container>

    )
}