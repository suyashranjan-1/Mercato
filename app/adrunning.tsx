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
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 py-10 px-5">
            <div className="grid gap-4">
                <div>
                    <Image
                    width={500}
                    height={600}
                    priority
                    className="h-full w-full rounded-lg object-cover" src="/images/ads1.jpg" alt=""/>
                </div>
                
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                    width={500}
                    height={500}
                    priority
                    className="h-full max-w-full rounded-lg" src="/images/ads3.jpg" alt=""/>
                </div>
                
            </div>
            <div className="grid gap-4">
                <div>
                    <Image
                    width={500}
                    height={500}
                    priority
                    className="h-full max-w-full rounded-lg" src="/images/ads2.jpg" alt=""/>
                </div>
                
            </div>
            
      </div>
      </div>
    </section>
  );
};

export default AdRunning;














