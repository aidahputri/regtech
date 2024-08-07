"use client";

import React, { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { TbMessageChatbot } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { motion } from "framer-motion";
import * as SidebarImage from "../../../public/regtech-sidebar.png";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-1/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-4 text-xl z-50 relative"
      >
        &#9776;
      </button>

      <div className="left-0 h-screen flex-col items-center gap-6 py-8 bg-white hidden md:flex md:rounded-md md:shadow-md">
        <Link className="text-3xl font-bold" href={"/"}>
          <span className="text-blue1">Reg</span>
          <span className="text-yellow1">Chat</span>
        </Link>

        <div className="flex flex-col gap-4 py-12 w-full">
          <Link
            className="flex items-center gap-3 px-4 xl:px-12 3xl:pl-20"
            href={"/"}
          >
            <RiDashboardFill />
            <span className="font-semibold">Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 xl:px-12 3xl:pl-20"
            href={"/chatbot"}
          >
            <TbMessageChatbot />
            <span className="font-semibold">Chatbot</span>
          </Link>
          <hr className="w-full my-4 border-t border-gray-800" />
          <Link
            className="flex items-center gap-3 px-4 xl:px-12 3xl:pl-20"
            href={"/"}
          >
            <LuLogOut />
            <span className="font-semibold">Logout</span>
          </Link>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Image
            src={SidebarImage}
            alt={"sidebar-image"}
            layout="responsive"
            width={100}
            height={100}
            quality={100}
            priority
          />
        </motion.div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z- transition-transform duration-300 ease-in-out flex flex-col items-center gap-6 w-1/2 py-8 bg-white md:hidden`}
      >
        <Link className="text-3xl font-bold" href={"/"}>
          <span className="text-blue1">Reg</span>
          <span className="text-yellow1">Chat</span>
        </Link>

        <div className="flex flex-col gap-4">
          <Link
            className="flex items-center gap-2 px-2"
            href={"/"}
          >
            <RiDashboardFill />
            <span className="font-semibold">Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-2 px-2"
            href={"/chatbot"}
          >
            <TbMessageChatbot />
            <span className="font-semibold">Chatbot</span>
          </Link>
          <Link
            className="flex items-center gap-2 px-2"
            href={"/"}
          >
            <LuLogOut />
            <span className="font-semibold">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
