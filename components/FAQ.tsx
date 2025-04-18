"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { faqList } from "@/data/faqList";



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#FCFCFC] py-12" dir="rtl">
      <div className="max-w-[1200px] mx-auto p-12 flex flex-col md:flex-row gap-10 bg-white">

        <div className="md:w-1/3 text-right pt-2 pr-2">
          <h2 className="text-[32px] font-bold mb-2">FAQ</h2>
          <h3 className="text-2xl font-bold mb-2">سوالات متداولی که از ما می‌پرسید</h3>
          <p className="text-base font-medium text-[#303030] leading-[1.8]">
            سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده شده‌اند.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:w-2/3">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                layout
                className="border border-[#E3E3E3] rounded-lg bg-white overflow-hidden"
                transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center text-right text-sm font-semibold p-4"
                >
                  <span>{item.question}</span>
                  <span className="text-[#333]">
                    {isOpen ? <CiCircleMinus size={36} /> : <CiCirclePlus size={36} />}
                  </span>
                </button>

                {isOpen && (
                  <motion.div
                    layout
                    className="px-4 pb-4 text-sm text-[#555] leading-[1.8]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
