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
            <div className="pt-8 sm:ml-64 flex items-center justify-between px-12 flex-wrap">
                <h1 className="w-1/2 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
                    Dashboard
                </h1>
                <h1 className="font-bold w-1/2 text-right">
                    {user.first_name} {user.last_name}
                </h1>
                <ModaleCreateActif />
            </div>
            <span className="h-1 w-full border-b-2"></span>
        </>
    );
}

export default Dashboard;
