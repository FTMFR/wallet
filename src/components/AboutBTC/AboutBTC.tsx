import Image from "next/image";
import React from "react";

// AboutBTC component displays information about Bitcoin (BTC) along with an image.
const AboutBTC = () => {
  return (
    <div className="flex gap-[30px] lg:mb-[115px] lg:justify-between items-center flex-col lg:flex-row justify-center w-full ">
      {/* Left section: Text content about Bitcoin */}
      <div className="flex flex-col lg:justify-start lg:gap-[30px] lg:items-start lg:flex-1 justify-center items-center gap-[30px] ">
        {/* Heading with "About Bitcoin" text, with Bitcoin in a distinct color */}
        <h2 className="flex text-[30px] font-bold gap-2 ">
          درباره <span className="text-[#0D1A8E]">بیت کوین</span>{" "}
        </h2>
        {/* Paragraph providing a detailed description of Bitcoin's market status and trading details */}
        <p className="text-base leading-8">
          بیت کوین با نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی دیجیتال
          است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1 بازار قرار داشته
          و سهم 52.484 درصدی از کل بازار را در اختیار دارد . هر واحد از بیت کوین
          در این لحظه با قیمت 67977.99 دلار، با احتساب نرخ تتر 64575 تومان معادل
          4389678704.25 تومان معامله می شود و حجم مبادلات روزانه آن
          20367661885.022 دلار است. قیمت در ۲۴ ساعت اخیر 1.53 تغییر یافته است.
          بالاترین قیمت بیت کوین در تاریخ 1402 اسفند 24 معادل 73628.4 دلار بوده
          که همینک -7.67 اختلاف دارد از آن زمان .
        </p>
      </div>
        {/* Right section: Image of Bitcoin */}
      <Image
        width={555}
        height={321}
        alt="BTC"
        src="/images/BTC.jpg"
        className="flex-1 md:w-[555px] md:h-[321px] sm:w-[337px] sm:h-[194.91px] "
      />
    </div>
  );
};

export default AboutBTC;
