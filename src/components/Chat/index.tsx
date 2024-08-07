type ChatProps = {
  sender: string;
  content: string;
};

export const Chat: React.FC<ChatProps> = ({ sender, content }) => {
  return (
    <p
      className={`text-white p-4 rounded-xl w-fit ${
        sender === "regchat"
          ? "bg-blue1 self-start mr-12"
          : "bg-yellow1 self-end ml-12"
      }`}
    >
      {content}
    </p>
  );
};
