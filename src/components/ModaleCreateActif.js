import { ActifForm } from "../components/ActifForm";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function ModaleCreateActif() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpenModal(true)}
                className="block text-white bg-[#3DA9FC] hover:bg-[rgba(61,169,252,0.95)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 py-1"
            >
                <span className="font-bold">Ajouter un actif</span>
            </Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>
                    Créer un actif (ex : Bitcoin, Action, Livret A..)
                </Modal.Header>
                <Modal.Body>
                    <div className="py-4">
                        <ActifForm />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
