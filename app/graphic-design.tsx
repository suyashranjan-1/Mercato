'use client'

import Image from "next/image"

const GraphicDesign = () => {
    return (   
    <div className="text-white">
 <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50 pb-2">
      Graphic Design
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-4xl text-center mx-auto px-4">
        
      From logos to marketing materials, we create visually compelling designs that align with your brand identity. Our expertise has helped numerous businesses enhance their digital presence with impactful and innovative visuals.
      </p>
      </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 px-5">
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={600}
            priority
            className="h-full w-full rounded-lg object-cover" src="/images/pic7.jpg" alt=""/>
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-full max-w-full rounded-lg" src="/images/pic5.jpg" alt=""/>
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-full max-w-full rounded-lg" src="/images/pic3.jpg" alt=""/>
        </div>
        
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-full max-w-full rounded-lg" src="/images/pic4.jpg" alt=""/>
        </div>
        
    </div>
    </div>
    </div> );
}
 
export default GraphicDesign;