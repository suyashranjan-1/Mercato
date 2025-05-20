"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";
import { HeroImage } from "./HeroImage";
import Image from "next/image";

export function SparklesPreview() {
<<<<<<< HEAD
  return (
    <div className="h-[53rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Boost Your Brand with US      </h1>
      <HoverBorderGradientDemo />
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        We turn your vision into success with strategic expertise and flawless execution.        </p>
      <br /><br /><br />
    </div>
  );
=======
    return (
        <div className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
            <div className="h-screen w-full relative">
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                <div className="relative z-20 flex flex-col items-center justify-center h-full">
                    <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white">
                        Boost Your Brand with US{" "}
                    </h1>
                    <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                        We turn your vision into success with strategic
                        expertise and flawless execution.{" "}
                    </p>
                    <div className="m-10 rounded-xl bg-transparent">
                        <HeroImage />
                    </div>
                </div>
                <div className="w-full relative">
                    <Image
                        src="/your-image-path.jpg"
                        alt="Hero Section Image"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    );
>>>>>>> 492d58007f8ecdc367f61cafeff976cc714677a2
}
