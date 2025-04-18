// "use client";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <div className="bg-[#FCFCFC] flex justify-between py-8 h-[548px] px-32 overflow-hidden">
//       <div className="hidden sm:block w-full max-w-[810px] pt-16 pl-24">
//         <Image
//           src="/icons/hero/Frame.svg"
//           alt="hero"
//           width={690}
//           height={428}
//         />
//       </div>
//       <div className="block sm:hidden w-full max-w-[810px] pt-16 pl-24">
//         <Image
//           src="/icons/hero/heroDesk.svg"
//           alt="hero"
//           width={312}
//           height={194}
//         />
//       </div>

//       <motion.div
//         initial={{ x: 200, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="w-full max-w-[630px] mx-auto"
//       >
//         <h1 className="text-[#141414] leading-[1.8] mt-20 p-2 text-2xl font-bold text-right">
//           کمپین بازاریابی و تبلیغاتی
//         </h1>
//         <p className="text-lg max-w-[486px] leading-[2] ml-auto text-[#303030] font-semibold text-right mt-1 p-2">
//           آیا به دنبال راهی مطمئن برای دیده شدنتان هستید؟ مشاوره رایگان ما به
//           شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را
//           بردارید
//         </p>
//         <p className="text-[#515151] text-right text-base font-bold p-2">
//           جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید
//         </p>
//         <div className="text-right p-2 mt-2">
//           <button className="text-white text-lg font-bold px-4 py-2 bg-[#7A3DE2] rounded-lg">
//             دریافت مشاوره
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;



"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[#FCFCFC] flex flex-col lg:flex-row items-center justify-between py-8 px-6 lg:px-32 overflow-hidden min-h-[548px]">
      {/* تصویر */}
      <div className="w-full flex justify-center lg:justify-end mb-6 lg:mb-0">
        <div className="block lg:hidden">
          <Image
            src="/icons/hero/heroDesk.svg"
            alt="hero mobile"
            width={312}
            height={194}
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src="/icons/hero/Frame.svg"
            alt="hero desktop"
            width={690}
            height={428}
          />
        </div>
      </div>

      {/* متن و دکمه */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full lg:max-w-[630px] text-right"
      >
        <h1 className="text-[#141414] leading-[1.8] mt-6 lg:mt-20 text-xl lg:text-2xl font-bold p-2">
          کمپین بازاریابی و تبلیغاتی
        </h1>
        <p className="text-[#303030] font-semibold mt-1 p-2 text-sm lg:text-lg leading-[2] max-w-[486px] ml-auto">
          آیا به دنبال راهی مطمئن برای دیده شدنتان هستید؟ مشاوره رایگان ما به
          شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را
          بردارید
        </p>
        <p className="text-[#515151] text-sm lg:text-base font-bold p-2">
          جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید
        </p>
        <div className="p-2 mt-4">
          <button className="text-white text-sm lg:text-lg font-bold px-4 py-2 bg-[#7A3DE2] rounded-lg">
            دریافت مشاوره
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
