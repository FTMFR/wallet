// 'use server'
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";

// Define types for coin data
interface CoinData {
  id: number;
  fa_name: string;
  currency_code: string;
  price: number;
  irt_price: string;
  daily_change_percent: number;
  buy_irt_price: string;
  sell_irt_price: string;
}
// Define the main component
const CurrentPrice: React.FC = () => {
  // State for user input and fetched coin data
  const [inputValue, setInputValue] = useState<string>("");
  const [slugCoin, setSlugCoin] = useState<CoinData[]>([]);
  const router = useRouter();
  // Handle user input changes for amount input
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  // Prepare data and config for API request
  const data = JSON.stringify({
    page: "1",
    limit: 10,
    search: "",
    currency_code: `${router.query.slug}`,
  });

  const config = {
    method: "post",
    url: "https://b.wallet.ir/coinlist/list",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  // Fetch coin data based on the currency code in the URL
  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        setSlugCoin(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [router.query.slug]);

  return (
    <>
      {slugCoin.length === 0 ? (
        <p className="flex w-full items-center justify-center my-10">
          در حال بارگذاری اطلاعات ...
        </p>
      ) : (
        slugCoin.map((item) => (
          <div
            className="flex w-full h-fit bg-white box-shadow rounded-[30px] mt-[60px] lg:mb-[160px] sm:h-fit mb-[60px] "
            key={item.id}
          >
            <div className="w-full px-[35px] py-[30px] flex flex-row lg:text-base text-xs sm:flex-col gap-[30px] ">
              <div className="flex flex-1 flex-col">
                <h3 className="font-bold mb-[27px] text-sm lg:text-base ">
                  قیمت لحظه‌ای
                </h3>
                <div className="flex justify-between items-center ">
                  <div className="flex gap-[12px]  ">
                    <Image
                      height={73}
                      width={73}
                      src="/images/bitcoin.svg"
                      alt="bitcoin"
                      className="md:w-[61px] md:h-[61px] sm:h-[43px] sm:w-[43px] "
                    />
                    <div className="flex flex-col items-start justify-center gap-[10px]">
                      <h4 className="font-bold text-sm lg:text-base">
                        {item.fa_name}
                      </h4>
                      <h5 className="text-[#696464] ">{item.currency_code}</h5>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-end gap-[10px]">
                    <h4 className="font-bold text-xs lg:text-base">
                      {item.price} تومان
                    </h4>
                    <h5 className="text-[#696464] ">
                      $
                      {Math.floor(Number(item.irt_price)).toLocaleString(
                        "fa-IR"
                      )}
                    </h5>
                  </div>
                </div>
                {/* Price change and buy/sell information */}
                <div className="divider BG-[#EBEBEB] border w-full h-0 my-[38px] "></div>
                <div className="flex flex-col gap-[25px]">
                  <div className="flex justify-between w-full">
                    <p>تغییر قیمت امروز :</p>
                    <p
                      className={`${
                        item.daily_change_percent > 0
                          ? "text-[#147D03]"
                          : "text-[#FF6868]"
                      }`}
                    >
                      {item.daily_change_percent < 0
                        ? "% " +
                          item.daily_change_percent
                            .toLocaleString("fa-IR")
                            .replace("-", "") +
                          "-"
                        : item.daily_change_percent === 0
                        ? item.daily_change_percent
                        : "% " + item.daily_change_percent + "+"}
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p>خرید بیت کوین:</p>
                    <p className="text-[#147D03]">
                      {Number(item.buy_irt_price)
                        .toLocaleString("fa-IR")
                        .replace("٫", ".")}
                      <span className="text-black"> تومان</span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p>فروش بیت کوین:</p>
                    <p className="text-[#FF6868]">
                      {Number(item.sell_irt_price)
                        .toLocaleString("fa-IR")
                        .replace("٫", ".")}
                      <span className="text-black"> تومان</span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p>بالاترین قیمت 24 ساعته :</p>
                    <p className="text-[#147D03]">
                      1.000.000.000 <span className="text-black">تومان</span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p>پایین ترین قیمت 24 ساعته :</p>
                    <p className="text-[#FF6868]">
                      1.000.000.000 <span className="text-black">تومان</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="divider  border h-full w-0 mx-[40px] sm:w-full sm:h-0 sm:mx-auto sm:my-[30px] "></div>
              <div className="flex flex-col flex-1 w-full">
                <div>
                  <h4 className="font-bold mb-[20px] text-sm lg:text-base">
                    ارسال می کنید:
                  </h4>
                  <div className="flex bg-[#F6F4F4] rounded-[30px] w-full font-bold text-[#9B9B9B]">
                    <input
                      value={inputValue}
                      onChange={handleInputChange}
                      type="number"
                      className="h-[47px] w-full bg-transparent rounded-[50px] pr-[27px] text-[#696464] flex-1 "
                      placeholder="مقدار را وارد کنید"
                    />
                    <div className="bg-[#9B9B9B] h-[37px] my-auto border border-[#9B9B9B] mx-[10px] "></div>
                    <div className="flex  flex-1">
                      <Image
                        src="/images/IranFlag.svg"
                        alt="Iran Flag"
                        width={26}
                        height={26}
                      />
                      <select
                        name=""
                        id=""
                        className="bg-transparent mr-[10px] "
                      >
                        <option value="" className="text-[#9B9B9B]">
                          تومان
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-left flex items-end justify-end mt-[30px] sm:mt-[20px]">
                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#E8E8E8] text-left">
                    <Image
                      width={17}
                      height={16}
                      alt="noun-back-and-forth"
                      src="/images/noun-back-and-forth.svg"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="font-bold mb-[20px] text-sm lg:text-base">
                    دریافت می کنید:
                  </h4>
                  <div className="flex bg-[#F6F4F4] rounded-[30px] w-full font-bold text-[#9B9B9B]">
                    <input
                      value={inputValue}
                      onChange={handleInputChange}
                      type="number"
                      className="h-[47px] w-full bg-transparent rounded-[50px] pr-[27px] text-[#696464] flex-1 "
                      placeholder="مقدار نهایی"
                    />
                    <div className="bg-[#9B9B9B] h-[37px] my-auto border border-[#9B9B9B] mx-[10px] "></div>
                    <div className="flex  flex-1">
                      <Image
                        src="/images/bitcoin.svg"
                        height={26}
                        width={26}
                        alt="iran-flag"
                      />
                      <select name="" id="" className="bg-transparent">
                        <option value="" className="text-[#9B9B9B]">
                          بیت کوین
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className=" my-[25px] gap-[17px] flex flex-col justify-center items-stretch ">
                  <div className="font-bold flex justify-between items-center">
                    <p>نرخ ارز یک</p>
                    <p>5.600 دلار</p>
                  </div>
                  <div className="font-bold flex justify-between items-center">
                    <p>نرخ ارز دو</p>
                    <p>49.750 تومان</p>
                  </div>
                </div>
                <button className="font-bold flex items-center justify-center text-[#0D1A8E] border border-[#0D1A8E] rounded-[50px] h-[47px] ">
                  ادامه خرید
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default CurrentPrice;
