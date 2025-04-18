import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#FCFCFC] flex justify-between py-8 h-[548px] px-32">
      <div className="w-full relative max-w-[810px] pl-32">
        {/* لایه‌های اصلی */}
        <Image
          className="absolute top-0 left-4"
          src="/icons/hero/hero-round.svg"
          width={445}
          height={445}
          alt="rounded"
        />
        <Image
          className="absolute z-10 top-7 -left-4"
          src="/icons/hero/laptop-horn.svg"
          width={530}
          height={480}
          alt="laptop"
        />
        <Image
          className="absolute z-20 top-20 -left-26"
          src="/icons/hero/rest-icon.svg"
          width={232}
          height={153}
          alt="rest"
        />

        <Image
          className="absolute bottom-44 -left-13"
          src="/icons/hero/instagram-icon.svg"
          width={40}
          height={40}
          alt="instagram"
        />
        <Image
          className="absolute bottom-32 -left-4"
          src="/icons/hero/facebook-icon.svg"
          width={40}
          height={40}
          alt="facebook"
        />
        <Image
          className="absolute bottom-22 -left-16"
          src="/icons/hero/twitter-icon.svg"
          width={40}
          height={40}
          alt="twitter"
        />
        <Image
          className="absolute top-4 right-32"
          src="/icons/hero/like-icon.svg"
          width={40}
          height={40}
          alt="like"
        />
        <Image
          className="absolute top-16 right-20"
          src="/icons/hero/heart-icon.svg"
          width={40}
          height={40}
          alt="heart"
        />
        <Image
          className="absolute top-30 right-31"
          src="/icons/hero/message-icon.svg"
          width={40}
          height={40}
          alt="message"
        />
      </div>

      {/*Marketing section*/}
      <div className="w-full max-w-[630px] mx-auto">
        <h1 className="text-[#141414] leading-[1.8] mt-20 p-2 text-2xl font-bold text-right">
          کمپین بازاریابی و تبلیغاتی
        </h1>
        <p className="text-lg max-w-[486px] leading-[2] ml-auto text-[#303030] font-semibold text-right mt-1 p-2">
          آیا به دنبال راهی مطمئن برای دیده شدنتان هستید؟مشاوره رایگان ما به شما
          کمک میکند تا مسیر موفقیت را پیدا کنید.همین حالا قدم اول را بردارید
        </p>
        <p className="text-[#515151] text-right text-base font-bold p-2">
          جهت دریافت مشاوره رایگان با شماره ی زیر تماس بگیرید
        </p>
        <div className="text-right p-2 mt-2">
        <button className="text-white text-lg font-bold px-4 py-2 bg-[#7A3DE2] rounded-lg ">دریافت مشاوره</button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
