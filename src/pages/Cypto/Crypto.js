import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { ModaleCreateActif } from "../../components/ModaleCreateActif";

function Crypto() {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <ModaleCreateActif />
                <h1>Page de crypto</h1>
            </div>
        </>
    );
}

export default Crypto;
