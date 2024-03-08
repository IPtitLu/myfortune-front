import React from "react";

const ActifTable = (actifs) => {
  return (
    <div class="my-8">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Actif
                </th>
                <th scope="col" class="px-6 py-3">
                    Montant
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
          <tbody>
            {actifs.actifs.map((actif) => (
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {actif.libelle}
                </th>
                <td className="px-6 py-4">{actif.montantsParDate.map((actif) => (
                    actif.montant+'€'
                ))}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Supprimer</a>
                </th>
              </tr>
            ))}     
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActifTable;
