"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/image2.png",
    quote: "Bird showed us to get started, what to do, and how to do it.",
    name: "Jason Scer",
  },
  {
    image: "/images/shop-2.jpeg",
    quote:
      "We had no idea how to get started, but Bird showed us the way. And we were able to create something amazing.",
    name: "John Prency",
  },

  {
    image: "/images/s-2.webp",
    quote:
      "The team at Bird is amazing. They helped us create a stunning store that we are proud of.",
    name: "Miguel Martinez",
  },
];

const Videoediting = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
        Video Editing
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-4xl text-center mx-auto">  
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
    </section>
  );
};

export default Videoediting;


