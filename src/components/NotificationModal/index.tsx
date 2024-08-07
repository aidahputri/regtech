import { FiX } from "react-icons/fi";

type NotificationModalProps = {
  onClose: () => void;
};

export const NotificationModal: React.FC<NotificationModalProps> = ({
  onClose,
}) => {
  return (
    <div className="flex justify-center items-center top-0 left-0 fixed w-screen h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/10"
        onClick={onClose}
      />
      <div className="flex flex-col bg-white p-6 rounded-xl z-10 gap-4">
        <div className="flex justify-between gap-4 items-center">
          <span className="text-xl font-bold">Notification</span>
          <button onClick={onClose}>
            <FiX size={20}/>
          </button>
        </div>

        <span>No notification</span>
      </div>
    </div>
  );
};
