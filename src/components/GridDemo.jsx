"use client"
import React, { useState } from "react";
import { BackgroundBeamsDemo } from "./muComp/BackgroundBeamsDemo";
import { AnimatedGradientTextDemo } from "./muComp/AnimatedGradientTextDemo";
import axios from "axios";

const GridBackgroundDemo =()=> {

  const [email,setEmail] = useState("");

  const handlejoin = () => {
    const resposne = axios.post("/api/waitlist",{
      email
    })
    .then((res)=>console.log(res))  
    .catch((err)=>console.log(err))

    setEmail("");
  }

  return (
    <div className="h-[100vh] w-full flex-col dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <AnimatedGradientTextDemo />
      <h1 className="text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
        Your Personal AI-Enhanced Diary
      </h1>
      <p className="text-xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-5">
        Securely capture your thoughts, reflect with AI insights, and unlock your personal growth.
      </p>
     
      <h1 className="relative z-10 mt-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        Join the waitlist
      </h1>

      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="join@aidiary.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 h-10 p-5 text-white relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
        <button onClick={handlejoin} 
        
        className="px-8 ml-5 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Join
        </button>
      </div>
    </div>
  );
}
export {GridBackgroundDemo};