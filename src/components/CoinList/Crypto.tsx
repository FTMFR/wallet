import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  getFilteredRowModel,
  CellContext,
  PaginationState,
  Updater,
} from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

interface CryptoData {
  fa_name: string;
  currency_code: string;
  price: number;
  daily_change_percent: number;
  buy_irt_price: number;
  sell_irt_price: number;
  search:string,
}

type ExpandedRows = { [key: number]: boolean };


const Crypto: React.FC = () => {
  const [data, setData] = useState<CryptoData[]>([]);
  const [currencyCode, setCurrencyCode] = useState<string | undefined>("");
  const [windowSize, setWindowSize] = useState({ width: 0 });
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string | undefined>("");
  const [expandedRows, setExpandedRows] = useState<ExpandedRows>({});
  // Handles search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };
  // Toggle row expansion for additional data display
  const handleRowToggle = (rowIndex: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowIndex]: !prev[rowIndex],
    }));
  };
  // Fetch data from the API and handle window resizing
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://b.wallet.ir/coinlist/list", {
          page: pageIndex + 1,
          limit: pageSize,
          search: searchQuery,
          currency_code: currencyCode,
        });
        setData(response.data.items);
        setTotalPage(response.data.total_page);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // Handle window resize to track screen width
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth });

      const handleResize = () => {
        setWindowSize({ width: window.innerWidth });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [searchQuery, pageIndex, pageSize, currencyCode]);
  // Define table columns using column helper
  const columnHelper = createColumnHelper<CryptoData>();
  const columns = [
    // Column for displaying crypto name and currency code
    columnHelper.accessor("fa_name", {
      header: () => (
        <span className="sm:h-[64px] w-fit text-sm lg:text-base">
          نام رمز ارز
        </span>
      ),
      cell: ({ row }: CellContext<CryptoData, unknown>) => (
        <div className="flex gap-[10px] pr-[10%] w-fit text-xs lg:text-sm">
          <Image
            width={37}
            height={37}
            src="/images/bitcoin.svg"
            alt="bitcoin"
            className="md:w-[33px] md:h-[33px] sm:w-[33px] sm:h-[33px]"
          />
          <div className="text-sm flex flex-col gap-1 items-start justify-start text-xs lg:text-sm">
            <h4 className="font-bold">{row.original.fa_name}</h4>
            <div className="text-gray-500 sm:text-xs">
              {row.original.currency_code}
            </div>
          </div>
        </div>
      ),
    }),
    // Column for displaying crypto price in USD
    columnHelper.accessor("price", {
      header: () => (
        <span className="sm:h-[64px] sm:flex sm:items-center text-sm lg:text-base">
          ارزش دلاری
        </span>
      ),
      cell: ({ row }) => (
        <p className="w-fit sm:text-xs">{`$${Number(row.original.price)
          .toLocaleString("fa-IR")
          .replace("٫", ".")}`}</p>
      ),
    }),
    columnHelper.accessor("daily_change_percent", {
      header: () => (
        <span className="sm:h-[64px] text-sm lg:text-base ">تغییر روزانه</span>
      ),
      cell: ({ row }) => (
        <span
          className="w-fit text-xs lg:text-sm"
          style={{
            color: row.original.daily_change_percent > 0 ? "green" : "red",
          }}
        >
          {row.original.daily_change_percent < 0
            ? "% " +
              row.original.daily_change_percent
                .toLocaleString("fa-IR")
                .replace("-", "") +
              "-"
            : row.original.daily_change_percent === 0
            ? row.original.daily_change_percent
            : "% " + row.original.daily_change_percent + "+"}
        </span>
      ),
    }),

    columnHelper.accessor("buy_irt_price", {
      header: () => (
        <span className="text-sm lg:text-base sm:hidden">خرید به والت</span>
      ),
      cell: ({ getValue }) => (
        <span className="text-xs lg:text-sm">
          {Math.floor(Number(getValue())).toLocaleString("fa-IR")} تومان
        </span>
      ),
    }),
    columnHelper.accessor("sell_irt_price", {
      header: () => (
        <span className="text-sm lg:text-base sm:hidden">فروش به والت</span>
      ),
      cell: ({ getValue }) => (
        <span className="text-xs lg:text-sm">
          {Math.floor(Number(getValue())).toLocaleString("fa-IR")} تومان
        </span>
      ),
    }),
    columnHelper.accessor("search", {
      header: () => (
        <div>
          <input
            type="search"
            placeholder="جستجو..."
            autoFocus={true}
            value={searchQuery}
            onChange={(e) => handleSearchChange(e)}
            className="
          text-sm lg:text-base
          md:w-[130px]
          bg-[white] h-[63px] w-[224px] bg-[url('../../public/images/searchIcon.svg')] bg-[center_right_10px] bg-[length:16px_16px] bg-no-repeat pr-[30px] rounded-lg
          md:h-[47px]
          "
          />
        </div>
      ),
      cell: ({ row }) => (
        <Link
          className="
          text-sm lg:text-base
          bg-[#1652F0] text-[#EEF2F5] font-bold w-[130px] h-[47px] px-12  py-3 rounded-lg
          md:h-[47px]
          "
          onClick={() => {
            setCurrencyCode(row.original.currency_code);
          }}
          href={`/${row.original.currency_code}`}
        >
          معامله
        </Link>
      ),
    }),
  ];

  const table = useReactTable<CryptoData>({
    data,
    columns,
    pageCount: -1,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    onPaginationChange: (updater: Updater<PaginationState>) => {
      if (typeof updater === 'function') {
        const newPagination = updater({ pageIndex, pageSize });
        setPageIndex(newPagination.pageIndex);
        setPageSize(newPagination.pageSize);
      } else {
        setPageIndex(updater.pageIndex);
        setPageSize(updater.pageSize);
      }
    },
    onGlobalFilterChange: setSearchQuery,
  });

  const visibleColumns = windowSize.width < 834 ? columns.slice(0, 3) : columns;

  return (
    <div className="text-center overflow-hidden lg:mt-[36px] md:mt-[15px] sm:mt-[12px] lg:text-sm text-xs rounded-lg">
      <table className="w-full">
        <thead className="lg:h-[97px] text-center md:h-[70px] bg-[#E3E7EC] w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="w-fit text-center">
              {headerGroup.headers
                .filter((_, index) => index < visibleColumns.length)
                .map((header) => (
                  <th
                    key={header.id}
                    className="px-4 text-center w-fit font-normal"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <React.Fragment key={row.id}>
              <tr
                className={`${
                  index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-white"
                } h-[97px] text-center`}
                onClick={() => handleRowToggle(index)}
              >
                {row
                  .getVisibleCells()
                  .filter((_, index) => index < visibleColumns.length)
                  .map((cell) => (
                    <td key={cell.id} className="text-center px-4 py-2">
                      <div>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    </td>
                  ))}
              </tr>

              {/* Accordion Body */}
              {windowSize.width < 834 && expandedRows[index] && (
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-white"
                  }  w-full`}
                >
                  <td colSpan={visibleColumns.length} className=" w-full">
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-xs mt-2 w-[90%] flex flex-col items-center justify-center gap-[12px] ">
                        <p className="flex justify-between items-center w-full">
                          خرید به والت:
                          <span>
                            {Math.floor(
                              Number(row.original.buy_irt_price)
                            ).toLocaleString("fa-IR")}{" "}
                            تومان
                          </span>
                        </p>
                        <p className="flex justify-between items-center w-full">
                          فروش به والت:
                          <span>
                            {Math.floor(
                              Number(row.original.sell_irt_price)
                            ).toLocaleString("fa-IR")}{" "}
                            تومان
                          </span>
                        </p>
                      </div>
                      <Link
                        className="
          bg-[#1652F0] text-[#EEF2F5] font-bold w-[90%] h-[47px] px-12  py-3 rounded-lg
          text-sm lg:text-base mt-[27px] mb-[25px] 
          md:h-[47px]
          "
                        onClick={() => {
                          setCurrencyCode(row.original.currency_code);
                        }}
                        href={`/${row.original.currency_code}`}
                      >
                        معامله
                      </Link>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center flex-row-reverse items-center mt-4 gap-2 ">
        {Array(totalPage)
          .fill(null)
          .map((_, index) => {
            if (
              index === 0 ||
              index === totalPage - 1 ||
              (index >= pageIndex - 2 && index <= pageIndex + 2)
            ) {
              return (
                <button
                  key={index}
                  onClick={() => setPageIndex(index)}
                  className={`w-[31px] h-[31px] rounded-full   ${
                    pageIndex === index
                      ? "bg-[#1652F0] text-[#fff]"
                      : "bg-[#EEF2F5] text-black"
                  } text-sm `}
                >
                  {index + 1}
                </button>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Crypto;
