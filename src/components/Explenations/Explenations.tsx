import Image from "next/image";
import React from "react";

// Functional component to display explanations about cryptocurrencies
const Explenations = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-[41px] leading-[32px] text-[16px] md:text-[14px] sm:text-[12px] text-right lg:mb-[95px] sm:mb-[79px] md:mb-[66px] ">
       {/* Heading for the explanations */}
      <h1 className="text-[24px] sm:text-[20px] font-black text-right">
        توضیحات کلی در مورد رمز ارزها
      </h1>
       {/* First paragraph explaining the basics of cryptocurrencies */}
      <div>
        رمز ارز ها از پروتکل های رمزگرافیکی و یا کد های فوق العاده پیچیده برای
        رمز گذاری دیتاهای حساس و انتقال آن ها استفاده می کنند تا معاملات امنی را
        فراهم کنند. توسعه دهندگان رمز ارزها این پروتکل ها را بر پایه اصول پیچیده
        ریاضیات و مهندسی کامپیوتر بنا کرده اند که آن ها را غیرقابل نفوذ می کند.
        این پروتکل ها همچنین هویت افراد استفاده کننده از رمز ارز ها را مخفی نگه
        می دارد و ردیابی و پیدا کردن آن ها را برای هر کسی و هر دولتی دشوار می
        کند. رمز ارزها همچنین برای کنترل شدن غیر متمرکز خود شناخته می شوند. این
        به آن معناست که تمام فعالیت ها و ارزش های این بازار توسط همان کد های
        پیچیده کنترل و ارزیابی می شوند و بانک ها و یا مقامات دولت ها کنترلی روی
        آن ها ندارند. ارزهای دیجیتال امکان معامله شدن توسط ارزهای واقعی را نیز
        دارا می باشند و شما می توانید در بعضی از مارکت های خاص و صرافی های
        شناخته شده، مانند بایننس (Binance)، ارز های دیجیتال خود را
        با دلار، پوند، یورو و غیره جایگزین کنید. خطر اصلی در همین مرحله اتفاق می
        افتد جایی که هکر ها و بدافزار ها امکان بلوکه کردن پول شما را در حین این
        انتقال دارا هستند.
      </div>
      <div className="flex items-center justify-center w-full my-[25px] ">
        {/* Image to visualize the concept */}
        <Image
          width={750}
          height={422}
          src={"/images/explain.jpg"}
          alt="explain"
          className="flex items-center justify-center md:w-full sm:w-full md:h-[411.31px] sm:h-[325px ] "
        />
      </div>
       {/* Second paragraph repeating the same content as the first */}
      <div className="">
        رمز ارز ها از پروتکل های رمزگرافیکی و یا کد های فوق العاده پیچیده برای
        رمز گذاری دیتاهای حساس و انتقال آن ها استفاده می کنند تا معاملات امنی را
        فراهم کنند. توسعه دهندگان رمز ارزها این پروتکل ها را بر پایه اصول پیچیده
        ریاضیات و مهندسی کامپیوتر بنا کرده اند که آن ها را غیرقابل نفوذ می کند.
        این پروتکل ها همچنین هویت افراد استفاده کننده از رمز ارز ها را مخفی نگه
        می دارد و ردیابی و پیدا کردن آن ها را برای هر کسی و هر دولتی دشوار می
        کند. رمز ارزها همچنین برای کنترل شدن غیر متمرکز خود شناخته می شوند. این
        به آن معناست که تمام فعالیت ها و ارزش های این بازار توسط همان کد های
        پیچیده کنترل و ارزیابی می شوند و بانک ها و یا مقامات دولت ها کنترلی روی
        آن ها ندارند. ارزهای دیجیتال امکان معامله شدن توسط ارزهای واقعی را نیز
        دارا می باشند و شما می توانید در بعضی از مارکت های خاص و صرافی های
        شناخته شده، مانند بایننس (Binance)، ارز های دیجیتال خود را
        با دلار، پوند، یورو و غیره جایگزین کنید. خطر اصلی در همین مرحله اتفاق می
        افتد جایی که هکر ها و بدافزار ها امکان بلوکه کردن پول شما را در حین این
        انتقال دارا هستند.
      </div>
    </div>
  );
};

export default Explenations;
