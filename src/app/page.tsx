"use client";

import { Analytics } from "@/components/Analytics";
import { MostFrequentPromptTable } from "@/components/MostFrequentPrompt";
import { QuestionModal } from "@/components/QuestionModal";
import { QuestionTable } from "@/components/Questions";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = isModalOpen ? "hidden" : "auto";
    }
  }, [isModalOpen]);

  return (
    <main className="px-24 py-16 flex flex-col gap-8">
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
        <div className="flex justify-between">
          <span className="text-3xl text-blue1 font-bold">Questions</span>
          <button
            className="p-4 bg-yellow1 rounded-xl text-white"
            onClick={() => setModalOpen(true)}
          >
            Add New Question
          </button>
        </div>
        <QuestionTable />
      </div>

      {isModalOpen && <QuestionModal onClose={() => setModalOpen(false)} />}
    </main>
  );
}
