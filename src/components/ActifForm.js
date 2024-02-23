export function ActifForm() {
    return (
        <>
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label
                        htmlFor="libelle"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Nom de l'actif
                    </label>
                    <input
                        type="text"
                        id="libelle"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ex : Bitcoin"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Catégorie
                    </label>
                    <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option defaultValue="Choisissez une catégorie" hidden>
                            Choisissez une catégorie
                        </option>
                        <option value="crypto">Crypto</option>
                        <option value="actions">Action</option>
                        <option value="immobilier">Immobilier</option>
                        <option value="epargne">Epargne</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="montant"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Montant
                    </label>
                    <input
                        type="text"
                        id="montant"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="2000"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-[#3DA9FC] hover:bg-[rgba(61,169,252,0.95)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Ajouter
                </button>
            </form>
        </>
    );
}
