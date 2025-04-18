//


"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1440px] max-h-[72px] py-3 flex justify-between items-center px-6 lg:px-32"
      >
        <div className="flex gap-x-2">
          <button className="border-[#ECECEC] border rounded-lg p-2">
            <Image
              src="/icons/navbar/user-avator.svg"
              alt="user icon"
              width={32}
              height={32}
            />
          </button>
          <button className="border-[#ECECEC] border rounded-lg p-2">
            <Image
              src="/icons/navbar/search.svg"
              alt="search icon"
              width={32}
              height={32}
            />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-x-8" dir="rtl">
          <Link className="text-[14px] font-medium text-[#A0A0A0]" href="#">
            خانه
          </Link>
          <Link className="text-[14px] font-medium text-[#A0A0A0]" href="#">
            طراحی سایت
          </Link>
          <Link className="text-[14px] font-bold text-[#141414]" href="#">
            کمپین بازاریابی و تبلیغاتی
          </Link>
          <Link className="text-[14px] font-medium text-[#A0A0A0]" href="#">
            اتوماسیون و بازاریابی
          </Link>
          <Link className="text-[14px] font-medium text-[#A0A0A0]" href="#">
            تولید محتوا
          </Link>
          <Link className="text-[14px] font-medium text-[#A0A0A0]" href="#">
            سئو
          </Link>
          <Link className="text-[14px] font-medium text-[#A0A0A0]" href="#">
            تماس با ما
          </Link>
        </div>

        {/* Logo & Hamburger */}
        <div className="flex justify-between gap-x-8">
          <button className="w-[102px] bg-[#ECECEC] rounded-2xl p-2 font-bold">
            LOGO
          </button>
          <button
            className="block lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Image
              src="/icons/navbar/menu.svg"
              alt="hamburger menu"
              width={32}
              height={32}
            />
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col gap-y-4 px-6 py-4 bg-white shadow-md rounded-md absolute top-full right-0 left-0 z-50"
            dir="rtl"
          >
            <Link href="#" className="text-sm font-medium text-[#141414]">
              خانه
            </Link>
            <Link href="#" className="text-sm font-medium text-[#141414]">
              طراحی سایت
            </Link>
            <Link href="#" className="text-sm font-bold text-[#7A3DE2]">
              کمپین بازاریابی و تبلیغاتی
            </Link>
            <Link href="#" className="text-sm font-medium text-[#141414]">
              اتوماسیون و بازاریابی
            </Link>
            <Link href="#" className="text-sm font-medium text-[#141414]">
              تولید محتوا
            </Link>
            <Link href="#" className="text-sm font-medium text-[#141414]">
              سئو
            </Link>
            <Link href="#" className="text-sm font-medium text-[#141414]">
              تماس با ما
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
