import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EpisodePage } from "../pages/EpisodePage";
import { Home } from "../pages/Home";

export function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/episode/:id" element={<EpisodePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}