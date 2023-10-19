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
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProfileMenu from "./ProfileMenu";

const LoginHeader = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const router = usePathname();

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

  return (
    <header
      className="bg-transparent py-8
      fixed w-full max-w-[1920px] mx-auto z-50 transition-all duration-300"
    >
      <div className="xl:mx-28 mx-8 transition-all duration-300 flex flex-row items-center justify-between">
        <div className="flex justify-between items-center gap-x-36">
          <Link href={"/"} className="cursor-pointer">
            <Image
              alt=""
              width={200}
              height={200}
              className="h-auto w-auto hidden xl:block"
              src="logo.svg"
              //   style={{ filter: "invert(100%)" }}
            />
            <Image
              alt=""
              width={200}
              height={200}
              className="h-auto w-auto xl:hidden"
              src="logo-black.svg"
              //   style={{ filter: "invert(100%)" }}
            />
          </Link>
          {/* <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl text-black" />
            ) : (
              <BiMenuAltRight
                className={`text-4xl ${header ? "text-black" : ""}`}
              />
            )}
          </div> */}
        </div>
        <nav className="max-h-max flex flex-row font-medium w-max gap-x-8 h-max bg-transparent transition-all duration-150 text-[15px] normal-case">
          <Link className="cursor-pointer" href={"/login"}>
            Sign In
          </Link>
          <Link className="cursor-pointer" href={"/register"}>
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default LoginHeader;
