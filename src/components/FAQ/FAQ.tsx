import Image from "next/image";
import React, { useState } from "react";
// Define the FAQ component
const FAQ = () => {
  // State to manage the currently open FAQ section
  const [openSection, setOpenSection] = useState<number | null>(1);
  // Function to toggle the open state of a FAQ section
  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };
  // Array of FAQ items, each with a title and content
  const items = [
    {
      title: "رمز ارز چیست؟",
      content:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافی ...",
    },
    {
      title: "آیا می توانم با کارت بانکی بیت کوین بخرم؟",
      content:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافی ...",
    },
    {
      title: "چرا باید از والت استفاده کنم؟",
      content:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافی ...",
    },
  ];

  return (
    <>
      <div
        id="accordion-open"
        data-accordion="collapse"
        className="flex flex-col w-full gap-[15px]  mb-[58px]"
      >
        <h1 className="text-3xl sm:text-xl font-bold lg:text-right mb-[21px] text-center">
          سوالات متداول
        </h1>
        {/* Map over the FAQ items and create an accordion for each */}
        {items.map((accordion, index) => (
          <div key={index} className="w-full">
            {/* Accordion header with a button to toggle the content */}
            <h2
              id={`accordion-open-heading-${index + 1}`}
              className={`text-lg sm:text-base   ${
                openSection === index + 1 ? "font-bold" : "font-normal"
              }`}
            >
              <button
                type="button"
                className={`flex items-center justify-between w-full sm:px-5 pt-[30px] pr-[49px] pl-[29px] pb-[32px] text-right border border-[#F1F1F1]
              ${
                openSection === index + 1
                  ? "rounded-b-none rounded-t-[15px] border-b-0"
                  : "rounded-[15px] sm:py-4 "
              }
               `}
                onClick={() => toggleSection(index + 1)}
                aria-expanded={openSection === index + 1}
                aria-controls={`accordion-open-body-${index + 1}`}
              >
                {/* Arrow icon to indicate open/closed state */}
                <span className="flex items-center">{accordion.title}</span>
                <svg
                  data-accordion-icon
                  className={`w-4 h-2 sm:w-[10.67px] sm:h-[5.33px] transform ${
                    openSection === index + 1 ? "" : "rotate-180"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            {/* Accordion body, conditionally rendered based on the open state */}
            <div
              id={`accordion-open-body-${index + 1}`}
              className={`${
                openSection === index + 1
                  ? "flex rounded-t-none rounded-b-[15px]"
                  : "hidden"
              } border border-t-0 border-[#F1F1F1] pr-[49px] pl-[29px] pb-[65px] w-full sm:px-5 sm:pt-[19px] sm:pb-[16px] `}
              aria-labelledby={`accordion-open-heading-${index}`}
            >
              <p className="text-base md:text-sm sm:text-xs ">
                {accordion.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Additional content, such as an image and a call to action */}
      <div className="bg-[#F8F9FA]  lg:gap-[38px] md:gap-[29px] lg:py-[14px] lg:pl-[77px] md:pl-[38px] lg:pr-[180px] md:pr-[62px] rounded-[15px] mb-[77px]">
        <div className="sm:h-[454px] sm:w-[75%] sm:mx-auto sm:flex-col-reverse sm:items-center sm:justify-center sm:text-center flex ">
          <Image
            src="/images/sammy-line.svg"
            priority
            width={337}
            height={337}
            alt="sammy"
            className="md:w-[265px] sm:w-[196px] sm:h-[196px] md:h-[265px] hg:w-[30%] lg:max-w-[337px] flex-1"
          />
          <div className="flex flex-col lg:gap-[52px] md:gap-[30px]  items-start justify-center flex-1 sm:items-center sm:justify-center  ">
            <h1 className="text-[28] font-bold md:text-xl sm:text-base sm:mb-[17px] ">
              علاقه مند به خرید بیت کوین هستید؟
            </h1>
            <span className="text-[22px] font-bold md:text-base sm:text-xs sm:mb-[17px]">
              ما اینجا هستیم تا شما تجربه ای متفاوت از خرید و فروش بیت کوین
              داشته باشید.
            </span>
            <button className="text-base font-bold bg-[#1652F0] w-[182px] h-[47px] rounded-[50px] text-white ">
              اکنون شروع کنید
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
