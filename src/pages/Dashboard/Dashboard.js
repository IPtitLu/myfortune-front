import React from "react";
import "./Dashboard.scss";
import { Sidebar } from "../../components/Sidebar";
import { ModaleCreateActif } from "../../components/ModaleCreateActif";

function Dashboard() {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <ModaleCreateActif />
                <h1>Page de dashboard</h1>
            </div>
        </>
    );
}

export default Dashboard;
