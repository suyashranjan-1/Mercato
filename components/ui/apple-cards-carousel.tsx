"use client";
import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
} from "react";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "../hooks/use-outside-click";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

type Card = {
    src: string;
    title: string;
    category: string;
    para: string;
    content: React.ReactNode;
};

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => {},
    currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <CarouselContext.Provider
            value={{ onCardClose: handleCardClose, currentIndex }}
        >
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div
                        className={cn(
                            "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
                        )}
                    ></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4",
                            "mx-auto max-w-7xl" // remove max-w-4xl if you want the carousel to span the full width of its container
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                        once: true,
                                    },
                                }}
                                key={"card" + index}
                                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="mr-10 flex justify-end gap-2">
                    <button
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                    </button>
                    <button
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export const Card = ({
    card,
    index,
    layout = false,
}: {
    card: Card;
    index: number;
    layout?: boolean;
}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { onCardClose, currentIndex } = useContext(CarouselContext);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useOutsideClick(containerRef, () => handleClose());

    const handleOpen = () => {
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
        onCardClose(index);
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/60 backdrop-blur-md"
                    >
                        <div
                            ref={containerRef}
                            className="relative h-[95vh] w-[95vw] max-w-7xl overflow-y-scroll rounded-2xl bg-white p-4 dark:bg-neutral-900"
                        >
                            <button
                                onClick={handleClose}
                                className="absolute right-4 top-4 z-50 rounded-full bg-neutral-100 p-2 text-neutral-500 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                            >
                                <IconX className="h-6 w-6" />
                            </button>
                            {card.content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                onClick={handleOpen}
                className={cn(
                    "relative flex h-[400px] w-[230px] shrink-0 cursor-pointer flex-col items-start justify-end overflow-hidden rounded-3xl bg-black md:h-[500px] md:w-96",
                    layout && "h-[500px] w-full md:h-[700px]"
                )}
            >
                <div className="absolute inset-0">
                    <Image
                        src={card.src}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 230px, 384px"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="relative z-20 p-6">
                    <p className="mb-3 text-sm font-light text-white/80">
                        {card.category}
                    </p>
                    <h3 className="mb-3 text-2xl font-medium text-white">
                        {card.title}
                    </h3>
                    <p className="text-sm font-light text-white/80">
                        {card.para}
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: ImageProps) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <img
            className={cn(
                "h-full w-full transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src as string}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};
