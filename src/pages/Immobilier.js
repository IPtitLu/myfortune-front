import React from "react";
import "./Dashboard.css";
import { Sidebar } from "../components/Sidebar";
import { ModaleCreateActif } from "../components/ModaleCreateActif";
import { ButtonAddActif } from "../components/ButtonAddActif";

function Immobilier() {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <ButtonAddActif />
                <ModaleCreateActif />
                <h1>Page d'immobilier</h1>
            </div>
        </>
    );
}

export default Immobilier;
