import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-245.svg",
  },
  {
    image: "/logo/logoipsum-225.svg",
  },
  {
    image: "/logo/logoipsum-248.svg",
  },
  {
    image: "/logo/logoipsum-249.svg",
  },
  {
    image: "/logo/stripelogo.png",
  },
];

const Videoediting = () => {
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
        Video Editing
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-4xl text-center mx-auto">
        We offer high-quality video editing services to help brands produce polished, engaging content. Our portfolio includes businesses like Fresh Farm Produce, StyleStreet Apparel, and Zenith Consulting, who utilize our social media video editing and promotional video editing services to create content that resonates with their audience.
        </p>

        <div className="md:flex items-center justify-center">
          <div className="flex flex-col items-center justify-center mt-10 w-full">
            <video 
              className="w-full max-w-4xl rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
              controls
              controlsList="nodownload"
            >
              <source src="/images/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videoediting;










