"use client";

import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className=" border-gray-200 bg-background">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-5 rtl:space-x-reverse">
          <span>
            <Image
              src="/assets/dreamrLogo2.png"
              className=""
              alt="Dreamr Logo"
              width={45}
              height={45}
              unoptimized={true}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
            />
          </span>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-primary">
            Dreamr
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-background md:dark:bg-background dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-xl text-white bg-blue-700 rounded-sm md:bg-transparent md:text-accent md:p-0 dark:text-primary md:dark:text-accent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/tracker"
                className="block py-2 px-3 text-xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-primary md:dark:hover:text-accent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tracker
              </a>
            </li>
            <li>
              <a
                href="/calculate"
                className="block py-2 px-3 text-xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-primary md:dark:hover:text-accent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Calculate
              </a>
            </li>
            <li>
              <a
                href="/history"
                className="block py-2 px-3 text-xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-amber-50 md:dark:hover:text-accent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                History
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
