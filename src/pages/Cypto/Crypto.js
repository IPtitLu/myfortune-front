import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { ModaleCreateActif } from "../../components/ModaleCreateActif";
import ActifTable from "../../components/ActifTable";
import {actifs} from "../../pages/Mock"

function Crypto() {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Mes cryptos</h1>
                <ModaleCreateActif />
                <ActifTable actifs={actifs}/>
            </div>
        </>
    );
}

export default Crypto;
