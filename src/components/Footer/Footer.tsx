import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[402px] md:h-[357px] sm:h-[579px] bg-[#1B2A4E] text-[16px] md:text-[12px] text-white ">
      <div className="sm:w-[90%] md:w-[90%] lg:w-[80%] mx-auto lg:pt-[43px] md:pt-[49px] sm:pt-[56px] lg:text-base md:text-xs sm:text-xs   ">
        <div className="flex flex-row sm:flex-col sm:items-start justify-start items-end lg:justify-between w-full">
          <div className="flex flex-col items-start justify-end gap-[14px] lg:h-[228px] md:h-[207px] sm:w-full md:w-fit lg:w-1/3 sm:gap-4 lg:gap-[14px] md:gap-[22px]  lg:ml-[38px] md:ml-[33px]  ">
            <Image
              width={132}
              height={64}
              src="/images/logo2.svg"
              alt="logo"
              className="sm:w-[110px] sm:h-[53px] "
            />
            <span className="w-fit md:max-w-[352px] sm:w-full text-justify font-normal lg:leading-[30px] leading-6 ">
              راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های
              پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام
              تجاری MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به
              ثبت رسید و فعالیت رسمی آغاز نمود.
            </span>
          </div>
          <div className="border sm:flex hidden w-full my-[21px] border-[#374566]"></div>
          <div className="flex flex-row flex-1 sm:w-full items-end h-full justify-between">
            <div className="flex flex-col justify-between lg:gap-[25px] md:gap-8 sm:gap-[22px] ">
              <h3 className="lg:text-xl font-bold md:text-base sm:text-sm ">
                لینک های مرتبط
              </h3>
              <div className="h-[157px] md:h-[151px] flex flex-col lg:gap-[19px] md:gap-[26px] sm:gap-4 ">
                <span>صفحه اصلی</span>
                <span>قیمت رمزارزها</span>
                <span>مقالات و وبلاگ</span>
                <span>درباره ما</span>
              </div>
            </div>
            <div className="flex flex-col h-[157px] md:h-[151px] lg:gap-[19px] md:gap-[26px] sm:gap-4">
              <span>سوالات متداول</span>
              <span>شرایط و قوانین</span>
              <span>فرصت های شغلی</span>
              <span>انجمن</span>
            </div>
            <div className="flex flex-col lg:gap-[25px] md:gap-8 sm:gap-[22px] ">
              <h3 className="lg:text-xl font-bold md:text-base sm:text-sm ">
                تبادل ارز
              </h3>
              <div className="h-[157px] md:h-[151px] flex flex-col lg:gap-[19px] md:gap-[26px] md:pl-[46px] sm:ml-[15px] sm:gap-4 ">
                <span>خرید بیت کوین</span>
                <span>خرید اتریوم</span>
                <span>خرید ریپل</span>
                <span>خرید سولانا</span>
              </div>
            </div>
            <div className="flex flex-col h-[157px] lg:gap-[19px] items-start justify-center md:hidden sm:hidden lg:ml-[30px]">
              <span>خرید یواس دی کوین</span>
              <span>خرید چین لینک</span>
              <span>خرید دوج کوین</span>
              <span>خرید تتر</span>
            </div>
          </div>
        </div>
        <div className="border w-full border-[#374566] flex lg:mt-10 lg:mb-[22px] md:mt-[33px] md:mb-[18px] sm:mt-4 sm:mb-[12px] "></div>
        <div className="flex justify-between items-center w-full md:mb-[17px] sm:mb-[26px] sm:flex-col-reverse ">
          <div className="">
            تمامی حقوق این سرویس متعلق به مجموعه{" "}
            <strong className="lg:text-[20px] font-bold ">ری پیمنت </strong> است
          </div>
          <div className="divider sm:flex hidden mb-3 mt-[14px] border-[#374566] w-full border"></div>
          <div className="flex lg:gap-7 gap-[18px] items-center justify-center  ">
            <div className="lg:w-[50px] lg:h-[50px] w-[31.91px] h-[31.91px] border rounded-full flex items-center justify-center">
              <Image
                width={24}
                height={24}
                src="/images/instagram.svg"
                alt="instagram"
                className="h-[15.31px] w-[15.31px] lg:w-[24px] lg:h-[24px] "
              />
            </div>
            <div className="lg:w-[50px] lg:h-[50px] w-[31.91px] h-[31.91px] border rounded-full flex items-center justify-center">
              <Image
                width={24}
                height={24}
                src="/images/face.svg"
                alt="facebook"
                className="h-[15.31px] w-[15.31px] lg:w-[24px] lg:h-[24px]"
              />
            </div>
            <div className="lg:w-[50px] lg:h-[50px] w-[31.91px] h-[31.91px] border rounded-full flex items-center justify-center">
              <Image
                width={24}
                height={24}
                src="/images/twit.svg"
                alt="twitter"
                className="h-[15.31px] w-[15.31px] lg:w-[24px] lg:h-[24px]"
              />
            </div>
            <div className="lg:w-[50px] lg:h-[50px] w-[31.91px] h-[31.91px] border rounded-full flex items-center justify-center">
              <Image
                width={24}
                height={24}
                src="/images/link.svg"
                alt="linkedin"
                className="h-[15.31px] w-[15.31px] lg:w-[24px] lg:h-[24px]"
              />
            </div>
            <div className="lg:w-[50px] lg:h-[50px] w-[31.91px] h-[31.91px] border rounded-full flex items-center justify-center">
              <Image
                width={24}
                height={24}
                src="/images/you.svg"
                alt="youtube"
                className="h-[15.31px] w-[15.31px] lg:w-[24px] lg:h-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
