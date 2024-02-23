import './App.scss';
import AuthPage from './pages/AuthPage/AuthPage.js';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Action from "./pages/Action/Action.js";
import Crypto from "./pages/Cypto/Crypto.js";
import Epargne from "./pages/Epargne/Epargne.js";
import Immobilier from "./pages/Immobilier/Immobilier.js";
import LandingPage from "./pages/LandingPage/Landingpage.js";

export default function App() {
    return (
        <Routes>
            <Route path="/authentification" element={<AuthPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/action" element={<Action />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/epargne" element={<Epargne />} />
            <Route path="/immobilier" element={<Immobilier />} />
            <Route path="/compte" element={<Dashboard />} />
            <Route path="/logout" element={<Dashboard />} />
            <Route path="/" element={<LandingPage />} />
        </Routes>
    );
}
