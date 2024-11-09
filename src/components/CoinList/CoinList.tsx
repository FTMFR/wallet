import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Crypto from "./Crypto";

// Define a Coin interface for the coin list items
interface Coin {
  id: number;
  name: string;
}

// CoinList component for displaying a dropdown menu of coin categories and a crypto price list
const CoinList: React.FC = () => {
  // State to track whether the dropdown menu is open
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // State to store the currently selected dropdown item
  const [dropDownValue, setDropDownValue] = useState<string>("دیفای");

  // List of coins to display in the dropdown menu
  const headerCoinList: Coin[] = [
    { id: 1, name: "دیفای" },
    { id: 2, name: "حریم خصوصی" },
    { id: 3, name: "متاورس" },
    { id: 4, name: "قابل استخراج" },
    { id: 5, name: "میم کوین" },
    { id: 6, name: "استیبل کوین" },
    { id: 7, name: "توکن" },
    { id: 8, name: "ICO" },
  ];

  return (
    <div className="sm:py-[50px] md:py-[60px] lg:py-24 flex flex-col justify-center items-center w-full ">
      {/* Main header for the crypto price list */}
      <h1 className="sm:text-xl md:text-3xl lg:text-4xl font-black text-center mb-8 p-0  whitespace-nowrap">
        لیست قیمت لحظه‌ای ارزهای دیجیتال‌
      </h1>
      {/* Dropdown menu and responsive display for selecting coin categories */}
      <div className="w-full h-[47px] text-xs lg:text-sm">
        {/* Desktop view dropdown menu */}
        <Menu as="div" className="relative text-right sm:block hidden h-full">
          <MenuButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="flex w-full h-full items-center justify-between gap-x-1.5 rounded-lg bg-[#1652F0] px-3 py-2 text-sm font-black
                         text-white shadow-sm ring-1 ring-inset ring-white pl-[18px] pr-7"
          >
            {dropDownValue}
            {/* Show up/down icon based on dropdown state */}
            {isOpen ? (
              <ChevronUpIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-white"
              />
            ) : (
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 h-5 w-5 text-white"
              />
            )}
          </MenuButton>
          <MenuItems
            className="absolute right-0 z-10 mt-0 w-full origin-top-right rounded-lg bg-white text-black shadow-lg
              ring-1 ring-black ring-opacity-5 transition "
          >
            {/* Only render items if the menu is open */}
            {isOpen && (
              <div className="flex flex-col items-start justify-center w-full">
                {headerCoinList.map((coinName) => (
                  <MenuItem key={coinName.id}>
                    {({ active }) => (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setDropDownValue(coinName.name);
                        }}
                        className={`flex items-center justify-start text-sm h-[47px] w-full pl-[18px] pr-7 ${
                          active ? "bg-blue-500 text-white rounded-lg" : ""
                        }`}
                      >
                        {coinName.name}
                      </a>
                    )}
                  </MenuItem>
                ))}
              </div>
            )}
          </MenuItems>
        </Menu>
        {/* Mobile view list of coin categories (horizontal buttons) */}
        <div className="flex flex-row gap-[14px] text-[16px] sm:hidden h-[47px] md:gap-[8px] items-center justify-center ">
          {headerCoinList.map((item) => (
            <div
              key={item.id}
              className={`flex flex-row items-center justify-center rounded-lg lg:text-[14px] lg:w-[130px] md:w-[85px] md:text-[12px] h-full ${
                item.id == 1
                  ? "bg-[#1652F0] text-white font-black"
                  : "bg-[#F7F7F7] font-normal"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      {/* Display the Crypto component, which might show crypto prices */}
      <div className="w-full">
        <Crypto />
      </div>
    </div>
  );
};

export default CoinList;
