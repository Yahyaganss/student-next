"use client";

import React, { SyntheticEvent, useEffect, useState } from "react";
import Image from "next/image";
import LoginHeader from "@/components/LoginHeader";
import { fadeIn } from "../../../variant";
import { motion } from "framer-motion";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { BiX } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import Cookies from "js-cookie";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Record<string, string> | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Function to close the alert after 3 seconds
    const closeAlert = () => {
      setError(null); // Clear the error
    };

    if (error) {
      // Display the alert
      setTimeout(closeAlert, 6000); // Close the alert after 3000 milliseconds (3 seconds)
    }
  }, [error]);

  const saveAccessTokenToLocal = (accessToken: string) => {
    localStorage.setItem("access_token", accessToken);
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data);
        return;
      }

      const accessToken = data.access_token;
      saveAccessTokenToLocal(accessToken);

      console.log(data);
      setError(null);

      router.push("/");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex w-full max-h-screen">
      <LoginHeader />
      {error && (
        <div className="flex justify-center items-center w-full fixed mt-4">
          <div
            id="alert-2"
            className="flex p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-800 gap-x-20 items-center"
            role="alert"
          >
            <div className="flex items-center gap-x-2">
              <CgDanger className="text-xl text-red-800" />
              <span className="font-medium text-sm">
                {Object.values(error).map((errorMessage, index) => (
                  <div key={index}>{errorMessage}</div>
                ))}
              </span>
            </div>
            <button
              type="button"
              className="ml-auto mt-[2px] -mx-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-red-200 dark:text-red-800 dark:hover:bg-gray-700"
              data-dismiss-target="#alert-2"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <BiX className="text-4xl text-red-800" />
            </button>
          </div>
        </div>
      )}
      <div className="w-[60%] bg-primary h-screen hidden xl:block"></div>
      <div className="w-full xl:w-[40%] flex flex-col bg-body items-center justify-center h-screen gap-y-12">
        <div className="text-center">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl sm:text-4xl font-semibold"
          >
            Welcome back
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-gray-500 text-sm sm:text-[16px]"
          >
            please login to your account
          </motion.p>
        </div>
        <form
          className="w-[80%] md:w-[50%] transition-all duration-300"
          onSubmit={submit}
        >
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative z-0 w-full mb-6 group"
          >
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative z-0 w-full mb-6 group"
          >
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </motion.div>

          {/* <div className="relative z-0 w-full group"> */}
          <motion.button
            variants={fadeIn("up", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            type="submit"
            className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-dark dark:focus:ring-blue-800"
          >
            Submit
          </motion.button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}
function setError(arg0: string) {
  throw new Error("Function not implemented.");
}
function isAuthenticated() {
  throw new Error("Function not implemented.");
}
