"use client";

import { Analytics } from "@/components/Analytics";
import { MostFrequentPromptTable } from "@/components/MostFrequentPrompt";
import { QuestionModal } from "@/components/QuestionModal";
import { QuestionTable } from "@/components/Questions";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { NotificationModal } from "@/components/NotificationModal";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNotifModalOpen, setNotifModalOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isModalOpen ? "hidden" : "auto";
    }
  }, [isModalOpen]);

  return (
    <main className="px-14 lg:px-24 py-16 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <span className="text-3xl text-blue1 font-bold">Analytics</span>
        <Analytics />
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-3xl text-blue1 font-bold">
          Most Frequent Prompts
        </span>
        <MostFrequentPromptTable />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-3xl text-blue1 font-bold">Questions</span>
          <button
            className="p-1 md:p-4 bg-yellow1 rounded-full md:rounded-xl text-white flex items-center gap-2"
            onClick={() => setModalOpen(true)}
          >
            <FaPlus size={20} />
            <span className="font-bold text-white hidden md:flex md:text-sm lg:text-base">
              Add New Question
            </span>
          </button>
        </div>
        <QuestionTable />
      </div>

      <button
        onClick={() => setNotifModalOpen(true)}
        className="fixed bottom-0 right-0 mb-8 mr-4 bg-red1 px-4 py-2 rounded-xl text-white font-bold"
      >
        See what should be updated soon!
      </button>
      {isModalOpen && <QuestionModal onClose={() => setModalOpen(false)} />}
      {isNotifModalOpen && (
        <NotificationModal onClose={() => setNotifModalOpen(false)} />
      )}
    </main>
  );
}
