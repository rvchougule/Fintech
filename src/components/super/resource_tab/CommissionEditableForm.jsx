export const CommissionEditableForm = ({ serviceKey, commission, onClose }) => {
  const serviceData = commission || [];

  return (
    <form className="space-y-4 max-w-full">
      <div className="max-h-[60vh] overflow-y-auto ring-1 ring-gray-700 rounded-md">
        <table className="w-full text-sm table-auto border border-gray-700 border-collapse">
          <thead className="text-gray-400 uppercase bg-darkBlue sticky -top-1 z-10">
            <tr>
              <th className="py-3 px-4 text-left border border-gray-700">
                Operator
              </th>
              <th className="py-3 px-4 text-left border border-gray-700">
                Type
              </th>
              <th className="py-3 px-4 text-left border border-gray-700">
                Whitelabel
              </th>
              <th className="py-3 px-4 text-left border border-gray-700">MD</th>
              <th className="py-3 px-4 text-left border border-gray-700">
                Distributor
              </th>
              <th className="py-3 px-4 text-left border border-gray-700">
                Retailer
              </th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((row, i) => (
              <tr key={i} className="dark:text-white">
                <td className="py-2 px-4 border border-gray-700">
                  {row.provider}
                </td>
                <td className="py-2 px-4 border border-gray-700">
                  <select
                    defaultValue={row.type}
                    className="w-full dark:bg-darkBlue dark:text-white ring-1 ring-gray-600 rounded-md px-3 py-2 focus:outline-none"
                  >
                    <option value="">Select Type</option>
                    <option value="Percent">Percent (%)</option>
                    <option value="Flat">Flat (Rs)</option>
                  </select>
                </td>
                <td className="py-2 px-4 border border-gray-700">
                  <input
                    type="text"
                    defaultValue={row.whitelable}
                    className="w-full dark:bg-darkBlue dark:text-white ring-1 ring-gray-600 rounded-md px-3 py-2 focus:outline-none"
                  />
                </td>
                <td className="py-2 px-4 border border-gray-700">
                  <input
                    type="text"
                    defaultValue={row.md}
                    className="w-full dark:bg-darkBlue dark:text-white ring-1 ring-gray-600 rounded-md px-3 py-2 focus:outline-none"
                  />
                </td>
                <td className="py-2 px-4 border border-gray-700">
                  <input
                    type="text"
                    defaultValue={row.distributor}
                    className="w-full dark:bg-darkBlue dark:text-white ring-1 ring-gray-600 rounded-md px-3 py-2 focus:outline-none"
                  />
                </td>
                <td className="py-2 px-4 border border-gray-700">
                  <input
                    type="text"
                    defaultValue={row.retailer}
                    className="w-full dark:bg-darkBlue dark:text-white ring-1 ring-gray-600 rounded-md px-3 py-2 focus:outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-right">
        <button
          type="button"
          onClick={onClose}
          className="bg-[#7C5CFC] hover:bg-[#6938EF] dark:text-white px-6 py-2 rounded-md font-medium"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
