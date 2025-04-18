'use client'
import { useState } from "react"
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";


const faqList = [
  {
    question: "مراحل طراحی وب‌سایت چیست؟",
    answer:
      "مراحل طراحی سایت شامل: نیازسنجی، طراحی رابط کاربری، توسعه فرانت‌اند و بک‌اند، تست و در نهایت تحویل می‌باشد.",
  },
  {
    question: "آیا برای سایت نیاز به تولید محتوا دارم؟",
    answer:
      "بله، محتوای باکیفیت یکی از مهم‌ترین فاکتورها برای سئو و جذب مخاطب است.",
  },
  {
    question: "پشتیبانی سایت شامل چه مواردی می‌شود؟",
    answer:
      "بروزرسانی فنی، رفع خطا، بکاپ‌گیری، بهبود امنیت و پاسخگویی به مشکلات روزمره.",
  },
  {
    question: "طراحی سایت چقدر زمان می‌برد؟",
    answer:
      "بسته به نوع پروژه بین ۲ تا ۴ هفته زمان نیاز دارد. سایت‌های فروشگاهی معمولاً زمان بیشتری می‌برند.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="bg-[#FCFCFC] py-12" dir="rtl">
    <div className="max-w-[1200px] mx-auto p-12 flex flex-col md:flex-row gap-10 bg-white">
      {/* Right Section */}
      <div className="md:w-1/3 text-right pt-2 pr-2">
        <h2 className="text-[32px] font-bold mb-2">FAQ</h2>
        <h3 className="text-2xl font-bold mb-2">سوالات متداولی که از ما می‌پرسید</h3>
        <p className="text-base font-medium text-[#303030] leading-[1.8]">
          سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده شده اند.
        </p>
      </div>

      {/* Left Section - Accordion */}
      <div className="flex flex-col gap-4 md:w-2/3">
        {faqList.map((item, index) => (
          <div key={index} className="border border-[#E3E3E3] rounded-lg bg-white">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center text-right text-sm font-semibold p-4"
            >
              <span>{item.question}</span>
              <span className="text-[#333]">
                {openIndex === index ? <CiCircleMinus size={36} /> : <CiCirclePlus size={36} />}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-[#555] leading-[1.8]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default FAQ
