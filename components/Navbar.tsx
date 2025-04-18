"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-brand w-full max-w-[1440px] max-h-[72px] py-3 flex justify-between items-center px-32"
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

      <div className="flex flex-row-reverse gap-x-8">
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

      <div>
        <button className="w-[102px] bg-[#ECECEC] rounded-2xl p-2 font-bold">
          LOGO
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
