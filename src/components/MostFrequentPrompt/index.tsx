export const MostFrequentPromptTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prompt
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Frequency
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">
              How can I ensure my business have complied to the government
              regulatory?
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              4
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">
              What is regulatory?
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              3
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
