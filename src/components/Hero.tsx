"use client";
import { BsFillPersonFill, BsChat } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import Modal from "./Modal";
import { useState, useEffect } from "react";

const imageProfile = [
  {
    image: "/yahya.jpg",
  },
];

export default function Hero() {
  return (
    <div className="h-full w-full xl:w-[70%]">
      <div className="flex flex-row mx-[40px] xl:mx-[100px]  pb-[100px]">
        <div className="flex flex-col w-full  h-full gap-y-3">
          <h1 className="font-semibold text-[32px]">Student Feed</h1>
          <p className="text-neutral-600">
            Showcasing my passion for technology, design, and problem-solving
            through code.
          </p>
          <div className="flex flex-col gap-y-6">
            {/* <div className="flex flex-row w-full h-full bg-white rounded-[12px] border py-2 px-4 items-center mt-4 justify-between">
              <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                <BsFillPersonFill className="w-full h-full text-slate-600" />
              </div>
              <form action="" className="w-full p-4">
                <input
                  type="text"
                  name="q"
                  className="w-full border h-10 p-6 rounded-full text-[12px]"
                  placeholder="Apa yang anda pikirkan, Yahya?"
                />
              </form>
              <AiOutlinePlus size="24" />
            </div> */}
            <Modal />
            <div className="flex flex-col w-full h-full bg-white rounded-[12px] border py-2 pt-4 px-4 gap-y-4">
              <div className="flex flex-row gap-x-4 items-center">
                <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                  <BsFillPersonFill className="w-full h-full text-slate-600" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-medium">
                    Yahya Zacky Syahputra
                  </h1>
                  <p className="text-[12px]">22 September 2023 pada 15.12</p>
                </div>
              </div>
              <p className="text-[15px] font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-col text-slate-600">
                <div className="flex flex-row justify-between py-2 text-[14px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp />
                    <h1>Zacky dan 2 lainnya</h1>
                  </div>
                  <h1>4 Komentar</h1>
                </div>
                <div className="flex flex-row border-t justify-around py-2 items-center text-[15px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp size={20} />
                    <h1>Suka</h1>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <BsChat size={20} />
                    <h1>Komentar</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full bg-white rounded-[12px] border py-2 pt-4 px-4 gap-y-4">
              <div className="flex flex-row gap-x-4 items-center">
                <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                  <BsFillPersonFill className="w-full h-full text-slate-600" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-medium">
                    Yahya Zacky Syahputra
                  </h1>
                  <p className="text-[12px]">22 September 2023 pada 15.12</p>
                </div>
              </div>
              <p className="text-[15px] font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-col text-slate-600">
                <div className="flex flex-row justify-between py-2 text-[14px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp />
                    <h1>Zacky dan 2 lainnya</h1>
                  </div>
                  <h1>4 Komentar</h1>
                </div>
                <div className="flex flex-row border-t justify-around py-2 items-center text-[15px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp size={20} />
                    <h1>Suka</h1>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <BsChat size={20} />
                    <h1>Komentar</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full bg-white rounded-[12px] border py-2 pt-4 px-4 gap-y-4">
              <div className="flex flex-row gap-x-4 items-center">
                <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                  <BsFillPersonFill className="w-full h-full text-slate-600" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-medium">
                    Yahya Zacky Syahputra
                  </h1>
                  <p className="text-[12px]">22 September 2023 pada 15.12</p>
                </div>
              </div>
              <p className="text-[15px] font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-col text-slate-600">
                <div className="flex flex-row justify-between py-2 text-[14px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp />
                    <h1>Zacky dan 2 lainnya</h1>
                  </div>
                  <h1>4 Komentar</h1>
                </div>
                <div className="flex flex-row border-t justify-around py-2 items-center text-[15px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp size={20} />
                    <h1>Suka</h1>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <BsChat size={20} />
                    <h1>Komentar</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full bg-white rounded-[12px] border py-2 pt-4 px-4 gap-y-4">
              <div className="flex flex-row gap-x-4 items-center">
                <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                  <BsFillPersonFill className="w-full h-full text-slate-600" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-medium">
                    Yahya Zacky Syahputra
                  </h1>
                  <p className="text-[12px]">22 September 2023 pada 15.12</p>
                </div>
              </div>
              <p className="text-[15px] font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-col text-slate-600">
                <div className="flex flex-row justify-between py-2 text-[14px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp />
                    <h1>Zacky dan 2 lainnya</h1>
                  </div>
                  <h1>4 Komentar</h1>
                </div>
                <div className="flex flex-row border-t justify-around py-2 items-center text-[15px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp size={20} />
                    <h1>Suka</h1>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <BsChat size={20} />
                    <h1>Komentar</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full bg-white rounded-[12px] border py-2 pt-4 px-4 gap-y-4">
              <div className="flex flex-row gap-x-4 items-center">
                <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                  <BsFillPersonFill className="w-full h-full text-slate-600" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-medium">
                    Yahya Zacky Syahputra
                  </h1>
                  <p className="text-[12px]">22 September 2023 pada 15.12</p>
                </div>
              </div>
              <p className="text-[15px] font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-col text-slate-600">
                <div className="flex flex-row justify-between py-2 text-[14px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp />
                    <h1>Zacky dan 2 lainnya</h1>
                  </div>
                  <h1>4 Komentar</h1>
                </div>
                <div className="flex flex-row border-t justify-around py-2 items-center text-[15px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp size={20} />
                    <h1>Suka</h1>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <BsChat size={20} />
                    <h1>Komentar</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full bg-white rounded-[12px] border py-2 pt-4 px-4 gap-y-4">
              <div className="flex flex-row gap-x-4 items-center">
                <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                  <BsFillPersonFill className="w-full h-full text-slate-600" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-medium">
                    Yahya Zacky Syahputra
                  </h1>
                  <p className="text-[12px]">22 September 2023 pada 15.12</p>
                </div>
              </div>
              <p className="text-[15px] font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="flex flex-col text-slate-600">
                <div className="flex flex-row justify-between py-2 text-[14px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp />
                    <h1>Zacky dan 2 lainnya</h1>
                  </div>
                  <h1>4 Komentar</h1>
                </div>
                <div className="flex flex-row border-t justify-around py-2 items-center text-[15px]">
                  <div className="flex flex-row items-center gap-x-2">
                    <FiThumbsUp size={20} />
                    <h1>Suka</h1>
                  </div>
                  <div className="flex flex-row items-center gap-x-2">
                    <BsChat size={20} />
                    <h1>Komentar</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
