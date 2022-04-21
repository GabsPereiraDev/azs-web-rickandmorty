import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { EpisodePage } from "../pages/EpisodePage";
import { Home } from "../pages/Home";

export function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/episode/:id" element={<EpisodePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}