export function ButtonAddActif() {
    return (
        <>
            <button
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
                className="block text-white bg-[#3DA9FC] hover:bg-[rgba(61,169,252,0.95)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                Ajoutez un actif
            </button>
        </>
    );
}
