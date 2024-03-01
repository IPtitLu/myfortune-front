import React from "react";
import "./Dashboard.scss";
import { Sidebar } from "../../components/Sidebar";
import { ModaleCreateActif } from "../../components/ModaleCreateActif";
import { useUser } from "../../App";

function Dashboard() {
    // Utilisation du hook useUser pour accéder aux informations de l'utilisateur
    const { user } = useUser();

    console.log("user : ", user);

    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <ModaleCreateActif />
                <h1>{user.id}</h1>
            </div>
        </>
    );
}

export default Dashboard;
