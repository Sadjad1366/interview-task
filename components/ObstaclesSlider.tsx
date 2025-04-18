"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef, useState } from "react";
import { obstacles } from "@/data/obstacles";

const ObstaclesSlider = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full relative py-28 bg-[#F9F9F9] overflow-visible">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="w-full bg-gradient-to-b from-[#43217C] to-[#7A3DE2] h-[226px] p-6">
          <h2 className="text-white text-xl leading-[1.8] font-bold text-center">
            موانع رایج در دریافت خدمات تولید محتوای کسب‌وکارها
          </h2>
        </div>
      </div>

      <div className="absolute top-[50%] -translate-y-1/2 left-8 z-30">
        <button
          ref={prevRef}
          className={`absolute top-14 left-18 w-10 h-10 rounded-lg shadow flex items-center justify-center transition ${
            isBeginning
              ? "bg-gray-300 cursor-not-allowed opacity-50"
              : "bg-white hover:bg-gray-100"
          }`}
          disabled={isBeginning}
        >
          <Image
            src="/icons/swipersection/arrow-left.svg"
            alt="prev"
            width={10}
            height={10}
          />
        </button>
      </div>

      <div className="absolute bottom-28 right-26 -translate-y-1/2 z-30">
        <button
          ref={nextRef}
          className={`w-10 h-10 rounded-lg shadow flex items-center justify-center transition ${
            isEnd
              ? "bg-gray-300 cursor-not-allowed opacity-50"
              : "bg-white hover:bg-gray-100"
          }`}
          disabled={isEnd}
        >
          <Image
            src="/icons/swipersection/arrow-right.svg"
            alt="next"
            width={10}
            height={10}
          />
        </button>
      </div>

      <div className="absolute z-20 w-full left-1/2 -translate-x-1/2 bottom-8">
        <div className="max-w-[1440px] mx-32">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            navigation={{
              prevEl: prevRef.current!,
              nextEl: nextRef.current!,
            }}
            onInit={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);

              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current!;
                swiper.params.navigation.nextEl = nextRef.current!;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.3 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {obstacles.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center h-full min-h-[226px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xs font-bold leading-[1.8] text-[#141414] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#4E4E4E] text-xs leading-[1.6] font-medium">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ObstaclesSlider;
