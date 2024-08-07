"use client";

import { Chat } from "@/components/Chat";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function ChatbotPage() {
  const [chats, setChats] = useState([
    {
      id: uuid(),
      sender: "regchat",
      content: "Hi! Welcome to RegChat",
    },
    {
      id: uuid(),
      sender: "regchat",
      content: "How can I help you?",
    },
  ]);
  const [typed, setTyped] = useState("");
  const [simulateResponseStage, setSimulateResponseStage] = useState<{
    stage: string;
    chatId?: any;
  }>({ stage: "NONE", chatId: undefined });

  const sendChat = () => {
    setChats([...chats, { id: uuid(), sender: "user", content: typed }]);
    setTyped("");
    setSimulateResponseStage({ stage: "LOADING" });
  };

  const simulateResponseLoading = () => {
    const tempChat = { id: uuid(), sender: "regchat", content: "..." };
    setChats([...chats, tempChat]);
    return tempChat.id;
  };

  useEffect(() => {
    if (simulateResponseStage.stage === "LOADING") {
      const chatId = simulateResponseLoading();
      setTimeout(() => {
        setSimulateResponseStage({ stage: "FINAL", chatId });
      }, 1500);
    } else if (simulateResponseStage.stage === "FINAL") {
      const newChats = [...chats];
      const chatIdx = newChats.findIndex(
        (v) => v.id === simulateResponseStage.chatId
      );
      newChats[chatIdx].content =
        "Sorry, currently RegChat is under maintenance. Please try again later";
      setChats(newChats);
    }
  }, [simulateResponseStage]);

  return (
    <main className="md:px-14 lg:px-24 pt-16 pb-10 flex flex-col gap-8 h-screen max-h-screen w-full">
      <div className="grow flex flex-col gap-4">
        {chats.map((v) => {
          return <Chat {...v} />;
        })}
      </div>

      <div className="flex gap-2">
        <input
          className="w-full py-2 px-6 rounded-xl"
          placeholder="Message RegChat"
          value={typed}
          onChange={(e) => setTyped(e.target.value)}
        />
        <button
          className="bg-blue1 rounded-xl py-2 px-4 text-white"
          onClick={() => {
            if (typed !== "") sendChat();
          }}
        >
          Send
        </button>
      </div>
    </main>
  );
}
