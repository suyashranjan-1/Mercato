'use client'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState, useRef } from "react";
// import {Navbar} from '../components/navbar'
import { NavbarDemo } from "../components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react"
import SEO from "./seo";
import GraphicDesign from "./graphic-design";
import ContentCreation from "./contentcreation";
import Videoediting from "./videoediting";
import Services from "./services";
import FAQS from "./faq";
import AdRunning from "./adrunning";
import Productphotography from "./productphotography";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const seoRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const thumbnailDesignRef = useRef<HTMLDivElement>(null);
  const contentcreation = useRef<HTMLDivElement>(null);
  const addrunningRef = useRef<HTMLDivElement>(null);
  const videoeditingRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const productphotographyRef = useRef<HTMLDivElement>(null);
  const scrollToSEO = () => {
    seoRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTOThumbnailDesign = () => {
    thumbnailDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTOContentCreation = () => {
    contentcreation.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTOAdRunning = () => {
    addrunningRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVideoEditing = () => {
    videoeditingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProductPhotography = () => {
    productphotographyRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <NavbarDemo/>

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        Boost Your Brand <br /> with Us
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        We turn your vision into success with strategic expertise and flawless execution.        </p>
<br /><br /><br />
        <div ref={seoRef}>
          <SEO />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        
        
        
        <div ref={productphotographyRef}>
          <Productphotography />
        </div>
        
        
        <div ref={videoeditingRef}>
          <Videoediting />
        </div>

        <div ref={addrunningRef}>
          <AdRunning />
        </div>

        <div id ='services'>
        <Services />
        </div>
        <InfiniteMovingCardsDemo />
        <FAQS />
      </div>
      <SpeedInsights />
    </div>
  );
}