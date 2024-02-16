import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Action from "./pages/Action";
import Crypto from "./pages/Crypto";
import Epargne from "./pages/Epargne";
import Immobilier from "./pages/Immobilier";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/action" element={<Action />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/epargne" element={<Epargne />} />
            <Route path="/immobilier" element={<Immobilier />} />
            <Route path="/compte" element={<Dashboard />} />
            <Route path="/logout" element={<Dashboard />} />
        </Routes>
    );
}
