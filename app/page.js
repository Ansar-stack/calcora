import CardLayout from "@/app/components/CardLayout";
import HomePageFaqsLayout from "@/app/components/CatagoryPageFaqsLayout";
import HomePageHero from "@/app/components/CatagoryHeroSection";
import WhyOurTools from "@/app/components/WhyOurTools";
import { MdCheck, MdPhoneIphone, MdPrivacyTip } from "react-icons/md";
import { FAQs } from "./HomePageFAQs";
export const metadata = {
  title: "Calcora - Free Online Calculators for Math, Finance, Health & More",
  description: "Calcora offers 100+ free online calculators including math tools, finance calculators, health trackers, unit converters & lifestyle planners. Instant calculations, no sign-up required.",
  alternates: {
    canonical: 'https://calcora.us/'
  }
};
const page = () => {
  const cardArray = [
    {
      icon: <li className="list-none outline-0">⚡</li>,
      title: "Super Fast Performance",
      para: "Lightning-fast results with no delays, even on mobile.",
    },
    {
      icon: <MdPrivacyTip className="text-zinc-900  text-2xl" />,
      title: "Privacy-Focused",
      para: "We don't track, log, or store ou inputs 100% safe.",
    },
    {
      icon: <MdPhoneIphone className="text-zinc-900 font-semibold text-2xl" />,
      title: "Mobile Friendly Design",
      para: "All Calculators are fully responsive and touch-optimized",
    },
    {
      icon: <MdCheck className="text-blue-700 font-semibold text-2xl" />,
      title: "Accurate Result",
      para: "All calculators are fully responsive and touch-optimized.",
    },
  ];

  return (
    <div className="w-full min-h-screen px-1 pt-1 pb-20">
      <HomePageHero 
  heading={`Calcora: All Your Essential Calculators in One Place`}
  para={`Solve your daily calculations instantly with Calcora. Our free online calculators cover finance, health, math, conversions, and more - each tool is accurate, easy-to-use, and completely private. No signup required.`}
  path={`calculators`}
/>
      <WhyOurTools title="Why Use Our Calculators?" cardArr={cardArray} />   
      <CardLayout />
      <HomePageFaqsLayout faqs={FAQs}/>
    </div>
  );
};

export default page;
