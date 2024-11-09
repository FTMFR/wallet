import Image from "next/image";
import React from "react";

const Header:React.FC = () => {
  return (
    <div className="w-full bg-[#f8f9fa]">
      <div className="flex justify-between items-center mx-auto lg:w-[85%] sm:w-[90%] md:w-[96%] sm:h-16 md:h-[92px] lg:h-[104px] text-sm font-normal lg:text-base">
        <div className="flex gap-12 items-center justify-center">
          <div className="flex items-center justify-start gap-3">
            <Image
              className="sm:block hidden"
              width={24}
              height={24}
              src="/images/ham-menu.svg"
              alt="hamburger menu"
            />
            <Image
              src="/images/logo.svg"
              width={57.74}
              height={27.98}
              alt="logo"
              className="sm:w-[57.74px] sm:h-[27.98px] w-[109px] h-[53px]"
            />
          </div>
          <div className="flex flex-row justify-center items-center sm:hidden md:text-sm lg:text-base md:gap-6 lg:gap-12">
            <div>صفحه اصلی</div>
            <div>قیمت رمزارزها</div>
            <div>مقالات</div>
            <div>تماس با ما</div>
            <div>درباره ما</div>
          </div>
        </div>

        <div className="flex text-sm font-medium justify-center gap-10">
          <div className="items-center justify-center hidden lg:flex gap-3">
            <Image src="/images/call.svg" width={24} height={24} alt="call" />
            <div>021-91008590</div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image
              width={24}
              height={24}
              src="/images/profile.svg"
              alt="profile svg"
            />
            <div>ورود / ثبت نام</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
