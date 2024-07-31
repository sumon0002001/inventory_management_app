"use client";
import { Bell, Menu, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* Leftside */}

      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="h-4 w-4" />
        </button>
        <div className="relative">
          <input
            type="search"
            placeholder="Start to search the products and groups"
            className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>
      {/* Rightside */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={() => {}}>
              <Sun className="cursor-pointer text-gray-500 size={24}" />
            </button>
          </div>
          <div className="relative">
            <Bell className="text-gray-500 cursor-pointer" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            {/* <Image
              src="https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/profile.jpg"
              alt="profile"
              width={50}
              height={50}
              className="rounded-full h-full object-cover"
            /> */}
            image
            <span className="font-semibold">Rawshan</span>
          </div>
        </div>
        <Link href="/setting">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
