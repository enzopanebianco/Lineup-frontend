import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Lineup from "./Pages/Lineup"

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lineup/:id" element={<Lineup />} />
            </Routes>
        </BrowserRouter>
    )
}