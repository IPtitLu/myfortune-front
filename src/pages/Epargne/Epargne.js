import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { ModaleCreateActif } from "../../components/ModaleCreateActif";

function Epargne() {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <ModaleCreateActif />
                <h1>Page d'epargne</h1>
            </div>
        </>
    );
}

export default Epargne;
