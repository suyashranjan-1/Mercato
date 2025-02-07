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
    image: "/images/seo1.jpg",
  },
  {
    image: "/images/seo2.jpg",
  },
  {
    image: "/images/seo3.jpg",
  },
  
];

const SEO = () => {
  return (
    <div>
      <div className=" p-4   mx-full relative z-10  w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
        SEO <br /> that works
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-4xl text-center mx-auto">
        At Mercato Agency, we deliver tailored SEO services to boost search rankings and drive organic traffic. Our expertise spans on-page, off-page, and technical SEO, ensuring visibility and sustainable growth. Success stories include Greenwood Landscaping, Modern Home Goods, and Techie Solutions.        </p>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-5 py-10 px-5">
            <div className="grid gap-4">
                <div>
                    <Image
                    width={500}
                    height={600}
                    priority
                    className="h-full w-full rounded-lg object-cover" src="/images/seo1.jpg" alt=""/>
                </div>
                
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                    width={500}
                    height={500}
                    priority
                    className="h-full max-w-full rounded-lg" src="/images/seo2.jpg" alt=""/>
                </div>
                
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                    width={500}
                    height={500}
                    priority
                    className="h-full max-w-full rounded-lg" src="/images/seo3.jpg" alt=""/>
                </div>
                
            </div>
            
        </div>

        <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
            font.className
          )}
        >
          &quot;We got rid of nearly a dozen different SEO tools because of what Mercato does for us.&quot;
        </div>

        <div className="items-center flex justify-center flex-col text-white">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="pt-2 xl:pt-0  w-10 xl:w-14 "
          />

          <div className=" text-center">
            <div className="text-sm  font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEO;

