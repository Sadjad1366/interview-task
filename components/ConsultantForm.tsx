"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  consultantFormSchema,
  ConsultantFormData,
} from "@/utils/validation/consultFormSchema";
import Image from "next/image";
import { Input } from "@/components/Input";
import { servicesList } from "@/data/serviceList";

const ConsultantForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ConsultantFormData>({
    resolver: zodResolver(consultantFormSchema),
  });

  const selectedServices = watch("services") || [];
  const onSubmit = async (data: ConsultantFormData) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("فرم ارسال شد:", data);
  };

  return (
    <div className="w-full max-h-[831px] bg-[#F9F9F9] py-14">
      <h1 className="text-[#141414] text-xl font-bold leading-[1.8] text-center">
        فرم دریافت مشاوره
      </h1>
      <h2 className="text-base font-semibold leading-[1.8] text-center mt-6">
        .برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل کنید
        تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[1200px] mx-auto bg-white px-9 pt-10 pb-6 border border-[#E3E3E3] rounded-lg mt-8"
        dir="rtl"
      >
        <div className="flex justify-between gap-6">
          <div className="relative w-1/3">
            <Input
              label="نام و نام خانوادگی خود را وارد کنید"
              placeholder="نام و نام خانوادگی"
              {...register("name")}
              error={errors.name?.message}
            />
            <Image
              className="absolute top-[46px] right-2"
              src="/icons/consultantform/user.svg"
              alt="user"
              width={24}
              height={24}
            />
          </div>
          <div className="relative w-1/3">
            <Input
              label="آدرس ایمیل خود را وارد کنید"
              placeholder="مثلا email@mail.com"
              {...register("email")}
              error={errors.email?.message}
            />
            <Image
              className="absolute top-[46px] right-2"
              src="/icons/consultantform/mail.svg"
              alt="mail"
              width={24}
              height={24}
            />
          </div>
          <div className="relative w-1/3">
            <Input
              label="شماره تماس خود را وارد کنید"
              placeholder="مثلا 09123456789"
              {...register("phone")}
              error={errors.phone?.message}
            />
            <Image
              className="absolute top-[46px] right-2"
              src="/icons/consultantform/phone.svg"
              alt="phone"
              width={24}
              height={24}
            />
          </div>
        </div>
        <h2 className="text-sm font-semibold leading-[1.8] mt-8">
          نوع سرویس(های) مورد نظر خود را انتخاب کنید.
        </h2>

        <div className="flex justify-between gap-6 mt-4">
  {servicesList.map((label, idx) => {
    const isChecked = selectedServices.includes(label);
    return (
      <label
        key={idx}
        className="relative w-full text-right pr-6 cursor-pointer"
      >
        <input
          type="checkbox"
          value={label}
          className="absolute top-[14px] right-9 w-4 h-4"
          checked={isChecked}
          onChange={() => {
            const updated = isChecked
              ? selectedServices.filter((s) => s !== label)
              : [...selectedServices, label];
            setValue("services", updated);
          }}
        />
        <div
          className="rounded-full py-3 pr-8 text-xs font-bold transition bg-[#F4F4F4] text-[#141414]"
        >
          {label}
        </div>
      </label>
    );
  })}
</div>


        {errors.services && (
          <p className="text-red-500 text-xs mt-2">{errors.services.message}</p>
        )}

        <h2 className="text-sm font-semibold leading-[1.8] mt-8">
          در مورد درخواست خود برای ما بنویسید.
        </h2>
        <textarea
          className="w-full mt-2 h-[160px] bg-[#F9F9F9] rounded-xl border border-[#D0D0D0] p-4 text-sm placeholder:text-gray-400"
          placeholder="توضیحات (اختیاری)"
          {...register("message")}
        />

        <div className="w-full flex justify-center mt-8">
          <button
            type="submit"
            className="bg-[#141414] w-[386px] text-white text-base font-bold rounded-2xl px-6 py-2 hover:bg-[#333]"
          >
            ثبت درخواست
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConsultantForm;
