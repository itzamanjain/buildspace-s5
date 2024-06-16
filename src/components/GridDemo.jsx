"use client";
import React, { useState } from "react";
import { AnimatedGradientTextDemo } from "./muComp/AnimatedGradientTextDemo";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import Script from 'next/script';
import Image from "next/image";
import BuymeacoffeeButton from "./muComp/BuyMeACoffeeButton";

const GridBackgroundDemo = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlejoin = async () => {
    setLoading(true);
    try {
      await axios.post("/api/waitlist", {
        email,
      });
      toast.success("Thank you for joining the waitlist");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong");
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] w-full flex flex-col dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-center text-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <AnimatedGradientTextDemo />
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Your Personal AI-Enhanced Diary
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-5">
        Securely capture your thoughts, reflect with AI insights, and unlock your personal growth.
      </p>

      <h1 className="relative z-10 mt-10 text-2xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
        Join the waitlist
      </h1>

      <div className="flex flex-col sm:flex-row items-center mt-4">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="join@aidiary.in"
          className="rounded-lg border-2 border-neutral-400 focus:ring-2 focus:ring-teal-500 h-10 p-5 text-white bg-neutral-950 placeholder:text-neutral-700 mb-4 sm:mb-0 sm:mr-4"
        />
        <button
          onClick={handlejoin}
          className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 relative"
          disabled={loading}
        >
          {loading ? (
            <ClipLoader size={20} color="#ffffff" />
          ) : (
            "Join"
          )}
        </button>
      </div>
      <BuymeacoffeeButton />
      <Toaster />
      
    </div>
  );
};

export { GridBackgroundDemo };



