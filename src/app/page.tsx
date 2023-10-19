"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { BiSolidChat } from "react-icons/bi";
import { Menu } from "@headlessui/react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";

export default function Home() {
  const [nav, setNav] = useState(false);
  const [message, setMessage] = useState("");
  const authToken = localStorage.getItem("access_token") || "";
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        const data = await response.json();

        console.log(data);

        setMessage(`Hi, ${data.data.name}`);

        setAuth(true);
      } catch (error) {
        setMessage("You are not logged in!");
        setAuth(false);
      }
    })();
  });

  return (
    <section className="h-[1700px]">
      <Header auth={auth} />
      {/* <Sidebar /> */}

      <div className="pt-[120px] flex w-full mx-[40px] xl:mx-[100px]">
        <h1>{message}</h1>
      </div>
      <Hero />
      {/* <div>  */}
      {/* <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2  fixed right-4 bottom-4">
        <BiSolidChat
          className="w-full h-full text-slate-60 text-primary"
          size={8}
        />
      </div> */}
      <div className="fixed right-8 bottom-8">
        <Menu as="div" className="w-full h-full flex xl:flex-row">
          {({ open }) => (
            <div className="relative flex-1">
              <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8 ">
                <div className="flex flex-row items-center gap-x-2 gap-y-2 xl:gap-y-0 group">
                  <div
                    className=" bg-white shadow-lg rounded-full p-2 overflow-hidden cursor-pointer"
                    onClick={() => setNav(!nav)}
                  >
                    {nav ? (
                      <IoIosArrowDown className="text-3xl text-primary" />
                    ) : (
                      <BiSolidChat className="text-3xl text-primary" />
                    )}
                  </div>
                </div>
              </Menu.Button>
              {open && (
                <Menu.Items
                  static
                  className={`dropdown-menu overflow-y-auto shadow-xl h-[600px] w-[440px] absolute bottom-[72px] right-0 z-50 transform translate-x-0 text-sm bg-white p-8 rounded-[20px]`}
                >
                  <div className="w-full bg-primary flex justify-center left-0 py-6 absolute top-0">
                    <h2 className="text-white font-medium text-lg">Messages</h2>
                  </div>
                  <div className="flex flex-col gap-y-4 mt-12">
                    <div className="flex flex-row border-b py-5 justify-between">
                      <div className="flex gap-x-4 items-center ">
                        <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                          <BsFillPersonFill className="w-full h-full text-slate-600" />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-[13px] font-medium">
                            Yahya Zacky Syahputra
                          </h1>
                          <p className="text-[13px] font-normal text-slate-500">
                            1d ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <IoIosArrowForward size={17} />
                      </div>
                    </div>
                    <div className="flex flex-row border-b py-5 justify-between">
                      <div className="flex gap-x-4 items-center ">
                        <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                          <BsFillPersonFill className="w-full h-full text-slate-600" />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-[13px] font-medium">
                            Yahya Zacky Syahputra
                          </h1>
                          <p className="text-[13px] font-normal text-slate-500">
                            1d ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <IoIosArrowForward size={17} />
                      </div>
                    </div>
                    <div className="flex flex-row border-b py-5 justify-between">
                      <div className="flex gap-x-4 items-center ">
                        <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                          <BsFillPersonFill className="w-full h-full text-slate-600" />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-[13px] font-medium">
                            Yahya Zacky Syahputra
                          </h1>
                          <p className="text-[13px] font-normal text-slate-500">
                            1d ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <IoIosArrowForward size={17} />
                      </div>
                    </div>
                    <div className="flex flex-row border-b py-5 justify-between">
                      <div className="flex gap-x-4 items-center ">
                        <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                          <BsFillPersonFill className="w-full h-full text-slate-600" />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-[13px] font-medium">
                            Yahya Zacky Syahputra
                          </h1>
                          <p className="text-[13px] font-normal text-slate-500">
                            1d ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <IoIosArrowForward size={17} />
                      </div>
                    </div>
                    <div className="flex flex-row border-b py-5 justify-between">
                      <div className="flex gap-x-4 items-center ">
                        <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                          <BsFillPersonFill className="w-full h-full text-slate-600" />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-[13px] font-medium">
                            Yahya Zacky Syahputra
                          </h1>
                          <p className="text-[13px] font-normal text-slate-500">
                            1d ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <IoIosArrowForward size={17} />
                      </div>
                    </div>
                    <div className="flex flex-row border-b py-5 justify-between">
                      <div className="flex gap-x-4 items-center ">
                        <div className="w-[48px] h-[48px] bg-white shadow-lg rounded-full p-2 overflow-hidden">
                          <BsFillPersonFill className="w-full h-full text-slate-600" />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="text-[13px] font-medium">
                            Yahya Zacky Syahputra
                          </h1>
                          <p className="text-[13px] font-normal text-slate-500">
                            1d ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <IoIosArrowForward size={17} />
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              )}
            </div>
          )}
        </Menu>
      </div>
    </section>
  );
}
