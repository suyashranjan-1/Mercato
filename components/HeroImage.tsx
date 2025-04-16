import Image from "next/image";

export const HeroImage = () => {
    return (
        <div className="w-full h-[600px] relative overflow-hidden  rounded-3xl">
            <Image
                src="https://picsum.photos/1920/1080"
                alt="Hero Image"
                fill
                className="object-cover w-full h-full"
                priority
                unoptimized
                style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
                    Transform Your Vision Into Reality
                </h2>
            </div>
        </div>
    );
};
