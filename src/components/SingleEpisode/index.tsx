
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux";
import { ICharacter } from "../../redux/modules/characters/dto/ICharacter";
import { ISingleEpisode } from "../../redux/modules/episodes/dto/ISingleEpisode";
import { AiOutlineStar } from 'react-icons/ai'
import { Card, Container } from "./style";
import { useCallback } from "react";
import { insertFavorite } from "../../redux/modules/favorites/actions/insertCharacters";


export function SingleEpisode() {
    const dispatch = useDispatch();

    const episode = useSelector<IStore, ISingleEpisode>(state => state.episodes.singleEpisode)
    const character = useSelector<IStore, ICharacter[]>(state => state.characters.characters)


    const handleAddToFavorite = useCallback(() => {
        dispatch(insertFavorite(episode))
    }, [dispatch])


    return (
        <Container>
            <div>
                <h1>Episodio : {episode.episode} - {episode.name}</h1>
                <p>Estreiado : {episode.air_date}</p>
                <div>
                    <button onClick={handleAddToFavorite}>
                        <AiOutlineStar />
                        favoritos
                    </button>
                </div>
            </div>
            <div className="container">
                <h2>Personagens Participando</h2>
                <div>
                    {episode.characters.map(char => {
                        const response = character.find(e => e.id == char.replace("https://rickandmortyapi.com/api/character/", "") as string)
                        console.log(char.replace("https://rickandmortyapi.com/api/character/", ""))
                        return (
                            <Card color={
                                response?.status === "Alive" ? "#06ac06" : response?.status === "unknown" ? "#b6b615" : "red"
                            }>
                                <img src={response?.image} alt="" />
                                <div>
                                    <h3>{response?.name}</h3>
                                    <p>{response?.species}</p>
                                    <strong>{response?.status}</strong>
                                </div>
                            </Card>
                        )
                    })}
                </div>


            </div>
        </Container >
    )
}