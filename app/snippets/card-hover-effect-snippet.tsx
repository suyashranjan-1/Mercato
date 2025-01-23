import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "SEO",
        description:
          "Unlock your online potential with expert SEO. We specialize in on-page, off-page, and technical SEO to improve search rankings, drive organic traffic, and grow your business.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "Design",
        description:
          "Design that drives results. We craft compelling visuals, from eye-catching thumbnails to comprehensive branding solutions, that elevate your brand and connect with your audience.",
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Ads",
        description:
          "Your guide to successful online advertising. We craft high-performing Google Ads & Meta Ads campaigns that deliver measurable results and help you achieve your marketing goals.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "Video Editing",
        description:
          "Transform your message with compelling video content. We specialize in crafting high-quality videos for social media, promotions, and more, that engage your audience and drive results.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
        title: "Product Photography",
        description:
          " Product photography that drives sales. We capture high-quality images and provide expert editing to showcase your products in the best possible light, ensuring they stand out from the competition.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "Support",
        description:
          "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
     
      },
];
