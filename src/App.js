import "./App.scss";
import AuthPage from "./pages/AuthPage/AuthPage.js";
import React, { useState, useEffect, createContext, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Action from "./pages/Action/Action.js";
import Crypto from "./pages/Cypto/Crypto.js";
import Epargne from "./pages/Epargne/Epargne.js";
import Immobilier from "./pages/Immobilier/Immobilier.js";
import LandingPage from "./pages/LandingPage/Landingpage.js";
import { Spinner } from "flowbite-react";

// Création du contexte pour les informations de l'utilisateur
const UserContext = createContext();

export default function App() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem("token");
    const userFetched = localStorage.getItem("userFetched");

    useEffect(() => {
        const fetchUserData = async () => {
            if (token) {
                try {
                    // Décoder le token JWT pour récupérer les informations
                    const decodedToken = jwtDecode(token);
                    const userId = decodedToken.id;

                    // Créer un objet utilisateur temporaire avec seulement l'ID
                    const tempUser = { id: userId };
                    setUser(tempUser); // Mettre à jour l'état de l'utilisateur avec les informations temporaires
                    localStorage.setItem("userFetched", "true");
                } catch (error) {
                    console.error("Erreur:", error.message);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <Spinner aria-label="Extra large spinner example" size="xl" />;
            </div>
        );
    }

    return (
        <UserContext.Provider value={{ user, setUser, isLoading }}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {token && user && userFetched ? (
                    <>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/action" element={<Action />} />
                        <Route path="/crypto" element={<Crypto />} />
                        <Route path="/epargne" element={<Epargne />} />
                        <Route path="/immobilier" element={<Immobilier />} />
                        <Route path="/compte" element={<Dashboard />} />
                    </>
                ) : (
                    <>
                        <Route path="*" element={<AuthPage />} />
                    </>
                )}
            </Routes>
        </UserContext.Provider>
    );
}

// Hook personnalisé pour accéder au contexte utilisateur
export const useUser = () => useContext(UserContext);
