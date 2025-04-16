"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-20 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "Crazy Good Thumbnails!",
    quote:
      "I never realized how much a thumbnail affects video clicks until I got mine designed here. My YouTube views literally doubled! The team just gets it – the colors, the fonts, the vibe. Love it!",
    name: "John D., YouTuber",
  },
  {
    quote:
"I had hours of messy footage and no clue how to make it look good. These guys turned it into a smooth, engaging video that actually keeps people watching. Super professional and super fast!" ,
    name: "Emma M., Fitness Coach",
    title: "Editing That Feels Like Magic!",
  },
  {
    quote: "I’ve tried DIY SEO, hired freelancers, and even wasted money on agencies that promised big results but did nothing. These guys? They actually know what they’re doing. My website’s finally ranking, and I’m getting real traffic. Worth every penny!" , 

    name: "James T., Blogger",
    title: "SEO That Actually Works!",
  },
  {
    quote:
"Running ads used to stress me out because I’d spend a ton and get nothing back. After handing things over to this team, my sales went up, and my ad costs went down. Now my ads actually make me money instead of just wasting it!",
    name: "Sophia M., E-commerce Owner",
    title: "Google Ads That Don’t Burn Money!",
  },
  {
    quote:
      "I run a small business, and digital marketing felt overwhelming. These guys handled everything – SEO, ads, video content – and now I have customers finding me instead of me chasing them. It’s been a total game-changer!",
    name: "David J., Entrepreneur",
    title: "A Lifesaver for My Business!",
  },
];
