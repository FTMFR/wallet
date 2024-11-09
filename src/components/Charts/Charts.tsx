import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import { useRouter } from "next/router";
import axios from "axios";

interface PriceItem {
  coin: {
    currency_code: string;
    en_name: string;
    fa_name: string;
  };
  date: string;
  irt_price: string;
  jdate: string;
  price: string;
  time: number;
  title: string;
  usd_price: string;
}

const Charts: React.FC = () => {
  // Define state variables to hold chart data for different currencies and active button selection
  const [datasBtc, setDatasBtc] = useState<number[]>([]);
  const [datasIrt, setDatasIrt] = useState<number[]>([]);
  const [datasUsd, setDatasUsd] = useState<number[]>([]);
  const [chartPeriod, setChartPeriod] = useState([]); // Store available chart periods
  const [activeButton, setActiveButton] = useState<string>("24h"); // Default active period

  // Router to get query parameters (e.g., currency_code)
  const router = useRouter();

  // Prepare the payload data for the chart API request based on active button and route parameter
  const data = {
    period: activeButton,
    currency_code: `${router.query.slug}`,
  };

  // Configuration for API request to fetch chart data
  const config = {
    method: "POST",
    url: "https://b.wallet.ir/coinlist/chart",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  // Configuration for API request to fetch available chart periods
  const config2 = {
    method: "get",
    url: "https://b.wallet.ir/coinlist/chart-period",
  };

  // Fetch available chart periods on component mount
  useEffect(() => {
    axios
      .request(config2)
      .then((response) => {
        setChartPeriod(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fetch chart data whenever activeButton (period) changes
  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        // Map data to state variables for each price type
        const priceArrayBtc = response.data.items.map((item: PriceItem) =>
          Number(item.price)
        );
        const priceArrayUsd = response.data.items.map((item: PriceItem) =>
          Number(item.usd_price)
        );
        const priceArrayIrt = response.data.items.map((item: PriceItem) =>
          Number(item.irt_price)
        );
        setDatasBtc(priceArrayBtc);
        setDatasIrt(priceArrayIrt);
        setDatasUsd(priceArrayUsd);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Initialize and render the Highcharts graphs when data changes
  useEffect(() => {
    // First chart configuration for BTC and IRT data
    Highcharts.chart("container", {
      chart: {},
      title: {
        text: "",
      },
      tooltip: {
        backgroundColor: "white",
        useHTML: true,
      },
      plotOptions: {
        area: {
          lineWidth: 2, // Adjust line thickness
          marker: {
            enabled: false, // Hide markers to focus on line
          },
          dataLabels: {
            enabled: false,
            padding: 10, // Adjusts spacing between data labels and line
          },
        },
      },

      yAxis: [
        {
          title: {
            text: "",
          },
          gridLineColor: "white", // Sets color for grid lines (mimics row lines)
          gridLineWidth: 1, // Width of the grid lines
          labels: {
            style: {
              color: "black", // Color of the row labels
              fontSize: "12px",
              fontWeight: "bold",
            },
          },
        },

        {
          title: {
            text: "",
          },
          gridLineColor: "#F1F1F1",
          gridLineWidth: 1,
          labels: {
            style: {
              color: "black",
              fontSize: "12px",
              fontWeight: "bold",
            },
          },
          //   categories: [
          //     "1.000 M",
          //     "1.500 M",
          //     "1.800 M",
          //     "2.000 M",
          //     "2.500 M",
          //     "2.800 M",
          //     "3.000 M",
          //     "3.500 M",
          //     "4.500 M",
          //   ],
          tickAmount: 9,
          opposite: true,
        },
      ],
      xAxis: {
        visible: false,
      },
      series: [
        {
          yAxis: 0,
          type: "area",
          name: "",
          color: "#F7931A",
          data: datasBtc,
        },
        {
          type: "area",
          yAxis: 1,
          name: "",
          color: "#1652F0",
          data: datasIrt,
        },
      ],
    });
    Highcharts.chart("second-container", {
      chart: {
        height: "120",
        spacingBottom: 0,
      },
      title: {
        text: "",
      },

      plotOptions: {
        area: {
          lineWidth: 2,
          marker: {
            enabled: false,
          },
          dataLabels: {
            enabled: false,
            padding: 10,
          },
        },
      },
      tooltip: {
        backgroundColor: "white",
      },
      yAxis: [
        {
          title: {
            text: "",
          },
          visible: true,
          gridLineColor: "white",
          gridLineWidth: 1,
        },
      ],
      xAxis: [
        {
          title: {
            text: "",
          },
          categories: [
            "Mar '23",
            "Apr '23",
            "May '23",
            "Jun '23",
            "Jul '23",
            "Aug '23",
            "Sep '23",
            "Oct '23",
            "Nov '23",
            "Dec '23",
            "Jan '23",
            "Feb '23",
          ],
          tickAmount: 9,
          opposite: false,
        },
      ],
      series: [
        {
          type: "area",
          name: "",
          color: "#4BB543",
          data: datasUsd.map((item) => item * 1000),
        },
      ],
    });
  }, [datasBtc, datasIrt, datasUsd]);

  return (
    <>
      <div
        className="w-full bg-white box-shadow rounded-[30px] lg:py-[20px] lg:px-[65px] mb-[110px]
    lg:mt-[115px] md:mt-[130px] sm:mt-[50px]
    md:py-[13px] md:px-[25px] 
    sm:mb-[40px] sm:py-[20px] sm:px-[20px] 
    "
      >
        <div className="flex items-center justify-end gap-8 mb-[23px] text-xs ">
          {chartPeriod.map((item, index) => (
            <button
              key={index}
              value={item}
              onClick={() => {
                setActiveButton(item);
              }}
              className={`
            ${
              activeButton === item
                ? "text-[#0D1A8E] font-bold"
                : "text-[#696464]"
            }
          `}
            >
              {item}
            </button>
          ))}
        </div>
        <div id="container"></div>
        <div id="second-container"></div>
        <div className="flex gap-[60px] text-xs font-bold mx-auto w-full items-center justify-center ">
          <div className="flex items-center gap-[3px]  ">
            <div className="bg-[#4BB543] rounded-full w-[10px] h-[10px]"></div>
            <span>نرخ دلار</span>
          </div>
          <div className="flex items-center gap-[3px]">
            <div className="bg-[#1652F0] rounded-full w-[10px] h-[10px] "></div>
            <span>برابری</span>
          </div>
          <div className="flex items-center gap-[3px]">
            <div className="bg-[#F7931A] rounded-full w-[10px] h-[10px] "></div>
            <span>قیمت بیت کوین</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:items-start justify-center mb-[100px] sm:mb-[71px]">
        <h1
          className="text-[30px] font-bold lg:mb-[51px] lg:text-right text-center md:mb-[36px] *:
     sm:text-xl sm:mb-[40px] 
     "
        >
          توضیحات بیشتر درباره بیت کوین
        </h1>
        <p className="text-right lg:text-base lg:leading-8 md:text-sm leading-7  ">
          بیت کوین با نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی دیجیتال
          است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1 بازار قرار داشته
          و سهم 52.484 درصدی از کل بازار را در اختیار دارد . هر واحد از بیت کوین
          در این لحظه با قیمت 67977.99 دلار، با احتساب نرخ تتر 64575 تومان معادل
          4389678704.25 تومان معامله می شود و حجم مبادلات روزانه آن
          20367661885.022 دلار است. قیمت در ۲۴ ساعت اخیر 1.53 تغییر یافته است.
          بالاترین قیمت بیت کوین در تاریخ 1402 اسفند 24 معادل 73628.4 دلار بوده
          که همینک -7.67 اختلاف دارد از آن زمان .
          <br />
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
    </>
  );
};

export default Charts;
