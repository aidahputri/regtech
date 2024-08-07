export const MostFrequentPromptTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Prompt</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              How can I ensure my business have complied to the government
              regulatory?
            </td>
            <td>4</td>
          </tr>
          <tr>
            <td>What is regulatory?</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
