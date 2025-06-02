"use client";
import React, { useRef } from "react";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { NavbarDemo } from "@/components/navbar";
import { useRouter } from "next/navigation";

import {
  Bot,
  Calendar,
  MessageSquare,
  CheckCircle,
  Star,
  Zap,
  Target,
  Building2,
  ShoppingCart,
  Users,
  Mail,
  Phone,
} from "lucide-react";

// Google Gemini Effect Component
const GoogleGeminiEffect = ({
  pathLengths,
}: {
  pathLengths: MotionValue<number>[];
}) => {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center bg-transparent absolute"></div>
        <svg
          width="1440"
          height="890"
          viewBox="0 0 1440 890"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-60 md:-top-40 w-full"
        >
          <motion.path
            d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: pathLengths[0] }}
            transition={{ duration: 0, ease: "linear" }}
          />
          <motion.path
            d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"
            stroke="#60A5FA"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: pathLengths[1] }}
            transition={{ duration: 0, ease: "linear" }}
          />
          <motion.path
            d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
            stroke="#93C5FD"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: pathLengths[2] }}
            transition={{ duration: 0, ease: "linear" }}
          />
          <motion.path
            d="M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439"
            stroke="#DBEAFE"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: pathLengths[3] }}
            transition={{ duration: 0, ease: "linear" }}
          />
          <motion.path
            d="M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1439 364"
            stroke="#1E40AF"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            style={{ pathLength: pathLengths[4] }}
            transition={{ duration: 0, ease: "linear" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default function Home() {
    const router = useRouter();
    const handleNavigation = (path: string) => {
        router.push(path);
    };
  // Safe usage of useScroll for framer-motion >=10, fallback for older versions or SSR
  let scrollYProgress: MotionValue<number>;
  // @ts-ignore
  let scrollYProgressValue = useScroll().scrollYProgress;
  try {
    // @ts-ignore
    scrollYProgress = scrollYProgressValue;
  } catch (e) {
    // fallback: static MotionValue(1)
    // @ts-ignore
    scrollYProgress = { get: () => 1, onChange: () => {}, set: () => {}, destroy: () => {} };
  }
  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.2], [0, 1]),
    useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
    useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
    useTransform(scrollYProgress, [0.3, 0.5], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
  ];

  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Automate Customer Support",
      description:
        "AI-powered chatbots that handle customer inquiries 24/7, reducing response time by 90% and improving satisfaction scores. Improve your business reputation and customer loyalty with reliable support automation.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "AI Scheduling Assistant",
      description:
        "Smart scheduling that finds optimal meeting times, manages your calendar automatically, and eliminates back-and-forth emails. Enhance productivity with seamless calendar integration.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Lead Qualification Bots",
      description:
        "Intelligent lead scoring and qualification that identifies your best prospects instantly and routes them to your sales team. Convert more leads into customers with data-driven sales automation.",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Task Management AI",
      description:
        "Automated workflow management that prioritizes and assigns tasks based on urgency, capacity, and business objectives. Streamline your operations with advanced task automation.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Tell Us Your Workflow",
      description:
        "Share your current processes, pain points, and automation goals with our AI experts during a free consultation.",
    },
    {
      number: "02",
      title: "We Build Your Custom AI Agent",
      description:
        "Our team creates a tailored AI solution designed specifically for your business needs, integrated with your existing tools.",
    },
    {
      number: "03",
      title: "Watch It Work for You",
      description:
        "Deploy your AI agent and see immediate improvements in efficiency, productivity, and cost savings within days.",
    },
  ];

  const useCases = [
    {
      industry: "Real Estate",
      icon: <Building2 className="w-6 h-6" />,
      useCase: "Lead Follow-up Automation",
      description:
        "Automated lead nurturing sequences that convert 40% more prospects into clients through personalized follow-ups and scheduling.",
      metrics: "40% increase in conversions",
      color: "from-emerald-500 to-teal-600",
    },
    {
      industry: "E-commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      useCase: "Order Support Automation",
      description:
        "Instant order tracking, returns processing, and customer inquiries handled automatically, reducing support workload.",
      metrics: "85% reduction in support tickets",
      color: "from-purple-500 to-indigo-600",
    },
    {
      industry: "Professional Services",
      icon: <Users className="w-6 h-6" />,
      useCase: "Email & Calendar Management",
      description:
        "Smart email management and scheduling automation that saves 15+ hours per week per employee on administrative tasks.",
      metrics: "15+ hours saved weekly",
      color: "from-orange-500 to-red-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      role: "CEO & Founder",
      content:
        "Mercato's AI agents completely transformed our customer support operations. We went from 24-hour response times to instant replies, and our customer satisfaction scores increased by 60%. The ROI was immediate.",
      rating: 5,
      avatar: "SC",
    },
    {
      name: "Marcus Rodriguez",
      company: "Premier Real Estate Group",
      role: "Sales Director",
      content:
        "The lead qualification bot is incredible. It pre-qualifies leads before they even reach our sales team, increasing our close rate from 12% to 28%. It's like having a full-time sales assistant that never sleeps.",
      rating: 5,
      avatar: "MR",
    },
    {
      name: "Jennifer Walsh",
      company: "Digital Marketing Pro",
      role: "Agency Owner",
      content:
        "Mercato's automation saved us 20+ hours per week on client communication and project management. We can now handle 3x more clients with the same team size. Absolutely game-changing for our agency.",
      rating: 5,
      avatar: "JW",
    },
  ];

  const trustedCompanies = [
    "TechFlow Solutions",
    "Premier Real Estate",
    "Digital Pro Agency",
    "Growth Labs",
    "Scale Ventures",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Google Gemini Background Effect */}
      <GoogleGeminiEffect pathLengths={pathLengths} />

      {/* Navigation */}
      <NavbarDemo />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-8 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Business Automation
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                Smarter Workflows with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  AI Agents
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                We build AI-powered agents that automate your repetitive tasks—so you can focus on what matters most: growing your business.
              </p>

              {/* CONTACT FORM BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center cursor-pointer"
                  aria-label="Contact Us"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </motion.a>
              </div>

              {/* Trusted by section */}
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">
                  Trusted by innovative businesses
                </p>
                <div className="flex flex-wrap justify-center gap-8 opacity-60">
                  {trustedCompanies.map((company, index) => (
                    <div
                      key={index}
                      className="text-gray-400 text-sm font-medium"
                    >
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="services" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span>
                    <span className="text-white">AI That </span>
                    <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      Works for You
                    </span>
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Custom AI agents designed to handle your most time-consuming tasks with precision, intelligence, and 24/7 availability.
                </p>
              </motion.div>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-24 px-4 bg-gradient-to-r from-gray-900/30 to-gray-800/20 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  How It{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Works
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Three simple steps to transform your business operations with intelligent AI automation.
                </p>
              </motion.div>
            </header>

            <div className="grid md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-500/25">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent transform translate-x-8"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Success{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how businesses across industries are using Mercato AI agents to drive measurable results and scale operations.
                </p>
              </motion.div>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/60 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${useCase.color} mr-3`}
                    >
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <span className="text-blue-300 font-semibold">
                      {useCase.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {useCase.useCase}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {useCase.metrics}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-24 px-4 bg-gradient-to-r from-gray-900/30 to-gray-800/20 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  What Our{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Clients Say
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real results from real businesses who transformed their operations with Mercato AI agents.
                </p>
              </motion.div>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/60 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-blue-300">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Ready to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Automate
                </span>{" "}
                Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join hundreds of businesses already saving time and money with custom AI agents. Get in touch with us today.
              </p>

              {/* Contact form or button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.a
                  href="contact@mercato.agency"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center text-lg"
                  aria-label="Email Mercato"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </motion.a>
                {/* <motion.a
                  href="tel:+1234567890"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white font-semibold rounded-xl hover:bg-gray-700/50 hover:border-gray-600/50 transition-all duration-300 flex items-center justify-center text-lg"
                  aria-label="Call Mercato"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </motion.a> */}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    500+
                  </div>
                  <div className="text-gray-400">Tasks Automated Daily</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-400">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-400">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    100%
                  </div>
                  <div className="text-gray-400">Customer Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}