import React from "react";

const ActifTable = (actifs) => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            {actifs.actifs.map((actif) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {actif.libelle}
                </th>
                <td className="px-6 py-4">{actif.montantsParDate.map((actif) => (
                    actif.montant+'€'
                ))}</td>
              </tr>
            ))}     
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActifTable;
