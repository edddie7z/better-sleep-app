"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "lucide-react";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="border-b-2 bg-background">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* This is a three-column layout for desktop: logo | nav links | theme switcher */}
        {/* First column: Logo */}
        <div className="flex items-center md:w-1/4 justify-start">
          <a
            href="/"
            className="flex items-center space-x-4 rtl:space-x-reverse"
          >
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
        </div>

        {/* Second column: Nav Links - centered */}
        <div
          className="hidden md:flex md:w-2/4 md:justify-center"
          id="navbar-default"
        >
          <ul className="font-semibold flex flex-row md:space-x-8 rtl:space-x-reverse">
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
                href="/logger"
                className="block py-2 px-3 text-xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-primary md:dark:hover:text-accent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Logger
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

        {/* Third column: Theme switcher */}
        <div className="flex items-center md:w-1/4 justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="p-2 h-10 w-10 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-primary dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <SunIcon className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-background text-primary border border-border"
            >
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className={`focus:bg-accent focus:text-accent-foreground ${
                  theme === "light" ? "bg-accent text-accent-foreground" : ""
                }`}
              >
                <SunIcon className="h-4 w-4 mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className={`focus:bg-accent focus:text-accent-foreground ${
                  theme === "dark" ? "bg-accent text-accent-foreground" : ""
                }`}
              >
                <MoonIcon className="h-4 w-4 mr-2" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className={`focus:bg-accent focus:text-accent-foreground ${
                  theme === "system" ? "bg-accent text-accent-foreground" : ""
                }`}
              >
                <svg
                  className="h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu toggle - only visible on small screens */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="ml-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
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
        </div>

        {/* Mobile menu - full width, only visible when toggled */}
        {isMobileMenuOpen && (
          <div className="w-full md:hidden mt-4" id="mobile-menu">
            <ul className="font-semibold flex flex-col p-4 border border-gray-100 rounded-lg bg-background dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 rounded hover:bg-accent hover:text-accent-foreground dark:text-primary"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/logger"
                  className="block py-2 px-3 rounded hover:bg-accent hover:text-accent-foreground dark:text-primary"
                >
                  Logger
                </a>
              </li>
              <li>
                <a
                  href="/calculate"
                  className="block py-2 px-3 rounded hover:bg-accent hover:text-accent-foreground dark:text-primary"
                >
                  Calculate
                </a>
              </li>
              <li>
                <a
                  href="/history"
                  className="block py-2 px-3 rounded hover:bg-accent hover:text-accent-foreground dark:text-primary"
                >
                  History
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
