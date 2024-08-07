export const QuestionTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              Question
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              Answer
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="max-h-40">
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">
              How can I ensure my business have complied to the government
              regulatory?
            </td>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300 overflow-y-auto">
              Ensuring that your business complies with government regulations
              involves several key steps: Understand the Regulations: Identify
              Relevant Regulations: Determine which regulations apply to your
              industry, location, and business activities. These can include
              federal, state, and local laws. Stay Updated: Regularly review
              updates to regulations, as laws can change frequently.
            </td>
          </tr>
          <tr className="max-h-40">
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300">
              What is regulatory?
            </td>
            <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-300 overflow-y-auto">
              Regulatory, in the context of business and government, refers to
              the rules, laws, and guidelines established by governmental
              agencies or regulatory bodies to control, manage, and govern
              various activities and industries. These regulations are designed
              to ensure safety, fairness, transparency, and compliance with
              legal and ethical standards.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
