type QuestionModalProps = {
  onClose: () => void;
};

export const QuestionModal: React.FC<QuestionModalProps> = ({ onClose }) => {
  return (
    <div className="flex justify-center items-center top-0 left-0 fixed w-screen h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/10"
        onClick={onClose}
      />
      <div className="flex flex-col bg-white p-6 rounded-xl z-10 gap-4">
        <div className="flex justify-between">
          <span className="text-xl font-bold">Add Question</span>
          <button onClick={onClose}>close</button>
        </div>

        <div className="flex flex-col gap-2">
          <span>Question</span>
          <input className="border border-black rounded-lg" />
        </div>

        <div className="flex flex-col gap-2">
          <span>Answer</span>
          <textarea className="border border-black rounded-lg" />
        </div>

        <div className="flex justify-end gap-2 text-white">
          <button className="px-4 py-2 bg-blue1 rounded-xl" onClick={onClose}>
            Save
          </button>
          <button className="px-4 py-2 bg-blue1 rounded-xl" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
