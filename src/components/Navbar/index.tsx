export const Navbar = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-1/6 py-8 bg-white">
      <span className="text-3xl font-bold">
        <span className="text-blue1">Reg</span>
        <span className="text-yellow1">Chat</span>
      </span>

      <div className="flex flex-col gap-4">
        <div className="flex">
          <span>Dashboard</span>
        </div>
        <div className="flex">
          <span>Chatbot</span>
        </div>
        <div className="flex">
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};
