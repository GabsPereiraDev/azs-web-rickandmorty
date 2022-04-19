import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { findEpisodes } from "./redux/modules/episodes/actions/findEpisodes";
import { AppRouter } from "./routes";





function App() {




  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findEpisodes())
  }, [dispatch])


  return (
    <AppRouter />
  );
}

export default App;
