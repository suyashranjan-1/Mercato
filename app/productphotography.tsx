"use client";

import Image from "next/image";

const logos = [
  {
    image: "/images/yearly.png",
  },
  {
    image: "/images/datingadvice.png",
  },
  {
    image: "/images/salary.jpg",
  },
];
const logos2 = [
  {
    image: "/images/bgmi.png",
  },
  {
    image: "/images/list.jpg",
  },
  {
    image: "/images/addicted.png",
  },
];

const Productphotography = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Thumbnail Creation
          <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-5xl text-center mx-auto">
          We craft eye-catching and high-converting thumbnails that grab
          attention instantly. Our designs are tailored to boost engagement,
          ensuring your content stands out in a crowded digital space.
        </p>
        <div className="md:flex items-center justify-center    gap-2">
          {logos.map((logos, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={logos.image}
                  alt="shopify store"
                  width={500}
                  height={500}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex items-center justify-center    gap-2">
          {logos2.map((logos2, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={logos2.image}
                  alt="shopify store"
                  width={500}
                  height={500}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productphotography;
