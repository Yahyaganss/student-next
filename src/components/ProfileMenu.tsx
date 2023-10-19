"use client";

import React, { useState } from "react";

import Image from "next/image";

import { Menu, Transition } from "@headlessui/react";

import { FaClock } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const imageProfile = [
  //   {
  //     image: "/yahya.jpg",
  //   },
];

export default function ProfileMenu() {
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      {({ open }) => (
        <div className="relative flex-1">
          <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8 ">
            <div className="flex flex-col xl:flex-row items-center gap-x-2 gap-y-2 xl:gap-y-0 group">
              {imageProfile.length === 0 ? (
                <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                  <BsFillPersonFill className="w-full h-full text-slate-600" />
                </div>
              ) : (
                <div className="w-[48px] h-[48px] bg-white shadow-xl rounded-full overflow-hidden">
                  {/* <BsFillPersonFill className="w-full h-full text-slate-480" /> */}
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src={"/yahya.jpg"}
                    className="w-full h-full bg-cover"
                  />
                </div>
              )}

              <IoIosArrowForward
                className={
                  open
                    ? "rotate-90 transition-all duration-300"
                    : "transition-all duration-300"
                }
                size="20"
              />
            </div>
          </Menu.Button>
          {open && (
            <Menu.Items
              static
              className="dropdown-menu shadow-lg max-h-max absolute -top-80 xl:top-[72px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm w-full bg-white max-w-[332px] rounded-[10px]"
            >
              <div className="cursor-pointer py-4 hover:bg-gray-50 text-[13px] uppercase text-center rounded-t-[10px]">
                Setting
              </div>
              <div className="cursor-pointer py-4 hover:bg-gray-50 text-[13px] uppercase text-center rounded-b-[10px]">
                Logout
              </div>
            </Menu.Items>
          )}
        </div>
      )}
    </Menu>
  );
}
