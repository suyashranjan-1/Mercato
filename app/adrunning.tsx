"use client";

import Image from "next/image";

const logos = [
  {
    image: "/images/ads2.jpg",
  },
  {
    image: "/images/ads3.jpg",
  },
  {
    image: "/images/ads1.jpg",
  },
  
];

const AdRunning = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
        Google and Meta Ads <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-4xl text-center mx-auto">  
        Increase your reach with targeted Google Ads and Meta Ads campaigns that drive targeted traffic and improve conversion rates. Our esteemed clients include Pinewood Studios, Healthy Living Essentials, and Velocity Fitness, all of whom trust us to fine-tune their Google Ads and Meta Ads campaigns for optimal performance and measurable results.
        </p>
        <div className="md:flex items-center justify-center    gap-1">
                          {logos.map((logos, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center justify-center mt-10 mx-auto"
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
      </div>
    </section>
  );
};

export default AdRunning;














