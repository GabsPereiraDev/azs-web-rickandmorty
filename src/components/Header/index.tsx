import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { IStore } from "../../redux";
import { ISingleEpisode } from "../../redux/modules/episodes/dto/ISingleEpisode";
import { Container } from "./style";

export function Header() {

    const favorites = useSelector<IStore, ISingleEpisode[]>(state => state.favorites.favorites)

    return (
        <Container>
            <div>
                <AiFillStar color="#fff" />

                <div>
                    {favorites.length > 0 ? (
                        favorites.map((favorite) => {
                            return (
                                <div>
                                    <img src="https://p4.wallpaperbetter.com/wallpaper/666/73/120/tv-show-rick-and-morty-artistic-cartoon-wallpaper-preview.jpg" alt="rick" />
                                    <div>
                                        <h4>{favorite.episode} - {favorite.name}</h4>
                                        <p>data de lançamento:{favorite.air_date}</p>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div>
                            <p>Carinho vazio</p>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}