"use client";

import { classNames } from "@/utils/classNames";


interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: string;
}

export const Input: React.FC<IInput> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-4 relative">
      {!!label && (
        <label className="text-[#141414] text-sm capitalize font-semibold leading-[1.8]">
          {label}
        </label>
      )}
      <input
        type="text"
        className={classNames(
          "border border-[#E3E3E3] bg-[#FCFCFC]  rounded-2xl py-1 px-2 hover:outline focus:outline",
          "placeholder:text-xs placeholder:font-medium pr-9",
          !!error ? "border-red-400" : "border-slate-300",
          !!error ? "outline-red-400" : "outline-slate-200",
          !!error ? "placeholder:text-red-400" : "placeholder:text-slate-400",
          className
        )}
        {...props}
      />
      {!!error && (
        <p className="text-red-400 text-xs font-semibold capitalize">{error}</p>
      )}
    </div>
  );
};
