import React from "react";
import "./Dashboard.scss";
import { Sidebar } from "../../components/Sidebar";
import { ModaleCreateActif } from "../../components/ModaleCreateActif";
import { ButtonAddActif } from "../../components/ButtonAddActif";

function Dashboard() {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <ButtonAddActif />
                <ModaleCreateActif />
                <h1>Page de dashboard</h1>
            </div>
        </>
    );
}

export default Dashboard;
