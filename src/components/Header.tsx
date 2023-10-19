"use client";

import { BiMenuAltRight, BiX } from "react-icons/bi";
import { Menu } from "@headlessui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

// nav data
export const navData = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About Us", path: "/about" },
];

const imageProfile = [
  //   {
  //     image: "/yahya.jpg",
  //   },
];

// next link
import Link from "next/link";

// next navigation
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProfileMenu from "./ProfileMenu";

const Header = ({ auth }: { auth: React.ReactNode }) => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  // const router = usePathname();
  const route = useRouter();
  const authToken = localStorage.getItem("access_token") || "";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const submitLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      window.alert("Logout Successfully!");

      route.push("/login");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  let menu;

  if (!auth) {
    menu = (
      <nav className="max-h-max flex flex-row font-medium w-max gap-x-8 h-max bg-transparent transition-all duration-150 text-[15px] normal-case">
        <Link className="cursor-pointer" href={"/login"}>
          Sign In
        </Link>
        <Link className="cursor-pointer" href={"/register"}>
          Sign Up
        </Link>
      </nav>
    );
  } else {
    menu = (
      <div>
        <Menu as="div" className="w-full h-full flex xl:flex-row">
          {({ open }) => (
            <div className="relative flex-1">
              <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8 ">
                <div className="flex flex-row items-center gap-x-2 gap-y-2 xl:gap-y-0 group">
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
                  className={`dropdown-menu shadow-lg h-max w-max absolute top-[72px] -left-20 xl:-left-12 z-10 transform translate-x-0 text-sm bg-white p-8 rounded-[10px]`}
                >
                  <div className="cursor-pointer p-4 hover:bg-gray-50 text-[13px] uppercase text-center rounded-t-[10px]">
                    Setting
                  </div>
                  <div
                    className="cursor-pointer p-4 hover:bg-gray-50 text-[13px] uppercase text-center rounded-b-[10px]"
                    onClick={submitLogout}
                  >
                    Logout
                  </div>
                </Menu.Items>
              )}
            </div>
          )}
        </Menu>
      </div>
    );
  }

  return (
    <header
      className="bg-white border-b py-6
      fixed w-full max-w-[1920px] mx-auto z-50 transition-all duration-300"
    >
      <div className="xl:mx-28 mx-8 transition-all duration-300 flex flex-row items-center justify-between">
        <div className="flex justify-between items-center gap-x-36">
          <Link href={"/"} className="cursor-pointer">
            <Image
              alt=""
              width={200}
              height={200}
              className="h-auto w-auto"
              src={`${nav || header ? "logo-black.svg" : "logo-black.svg"}`}
            />
          </Link>
        </div>
        {menu}
      </div>
    </header>
  );
};

export default Header;
