"use client";

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/navbar";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Evaluate Mercato Agency for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  services: z.enum([
    "SEO",
    "Video Editing",
    "Ads",
    "Graphic Design",
    "Thumbnail Creation",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: "Evaluate Mercato Agency for my company" | "Learn More" | "Get a Quote" | "Other";
  services:
    | "SEO"
    | "Video Editing"
    | "Ads"
    | "Graphic Design"
    | "Thumbnail Creation";
  info: string;
  terms: boolean;
};



export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm('service_57dccsx', 'template_4ovd2wl', form.current, {
        publicKey: '5_BKNco2OULcaqW0m',
      })
      .then(
        () => {
          alert('We have received your inquiry and will be contacting you via email shortly.');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className=" w-full   md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Navbar
        scrollToSEO={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollTOThumbnailDesign={() => {}}
        scrollTOContentCreation={() => {}}
        scrollToServices={() => {}}
        scrollTOAdRunning={() => {}}
        scrollToVideoEditing={() => {}}
        scrollToProductPhotography={() => {}}
      />
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div className="">
          <div className="text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact our sales team
          </div>
          <div
            className="
              
              py-4
              text-gray-300
                    "
          >
            Let&apos;s talk about how Mercato Agency can help your team work better.
          </div>

          <div className="bg-[#f6f5f4] md:w-11/12  space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
              One flexible agency for your entire company to optimize SEO, create stunning videos, run high-performing Google & Meta ads, design eye-catching thumbnails, and craft impactful graphics.
              </div>
            </div>

            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
              Enterprise features to securely manage campaigns, analytics, and creative assets.
              </div>
            </div>

            <div className="flex gap-4  ">
              <div className=" font-normal pb-4 ">
              Dedicated support to work with you on your strategy and help you build the best plan for your business growth.
              </div>
            </div>
          </div>
        </div>

          <form ref={form} onSubmit={sendEmail} className=" space-y-3 h-full border rounded-3xl p-10 md:w-2/3">
              
                <div className=" space-y-3 items-center justify-center w-full">
                  <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Full name *</label><br />
                  <input type="text" required name="first_name" className="form-control, flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
                
                <div className=" space-y-3 items-center justify-center w-full">
                  <label className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Email *</label>
                  <input type="email" required name="email" className="form-control, flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
                <div className="  space-y-3 items-center justify-center w-full">
                  <label className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Company name? (if any)</label>
                  <input type="text" name="company_name" className="form-control, flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
                <div className=" space-y-3 items-center justify-center w-full">
                  <label className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Services you are interested in</label>
                  <Select name="services" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SEO">SEO</SelectItem>
                      <SelectItem value="Ads">Ads</SelectItem>
                      <SelectItem value="Thumbnail Creation">Thumbnail Creation</SelectItem>
                      <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                      <SelectItem value="Video Editing">Video Editing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className=" space-y-3 items-center justify-center w-full">
                  <label className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">How can we help?</label>
                  <Select name="help" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Evaluate Mercato Agency for my company">Evaluate Mercato Agency <br/>for my company</SelectItem>
                      <SelectItem value="Learn More">Learn More</SelectItem>
                      <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className=" space-y-3 items-center justify-center w-full">
                  <label className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Preferred time slot for an online meet or call!</label>
                  <Select name="last_name" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00 AM - 11:00 AM (IST)">9:00 AM - 11:00 AM (IST)</SelectItem>
                      <SelectItem value="11:00 AM - 1:00 PM (IST)">11:00 AM - 1:00 PM (IST)</SelectItem>
                      <SelectItem value="2:00 PM - 4:00 PM (IST)">2:00 PM - 4:00 PM (IST)</SelectItem>
                      <SelectItem value="4:00 PM - 6:00 PM (IST)">4:00 PM - 6:00 PM (IST)</SelectItem>
                      <SelectItem value="6:00 PM - 8:00 PM (IST)">6:00 PM - 8:00 PM (IST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className=" space-y-3 items-center justify-center w-full">
                  <label className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Anything else?</label>
                  <textarea name="info" className="form-control, flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                </div>
                <div className="form-check, flex gap-4 items-center">
                  <input required type="checkbox" name="terms" className="form-check-input, peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground, outline
                
                text-sm
                font-light
                bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"/>
                  <label className="text-xs font-light  md:w-3/4 mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    I agree to Mercato Agency&apos;s sending marketing communications related to Mercato Agency
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <Button type="submit" className="btn btn-primary, text-sm font-light" disabled={loading}>
                    Submit
                  </Button>
                </div>
          </form>


      </div>
    </div>
  );
}