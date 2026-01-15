import ToolsHero from "@/app/components/ToolsHero";
import React from "react";
import ToolFAQs from "@/app/components/ToolFAQs";
import { FAQs } from "./FAQs";
import HowToUse from "@/app/components/HowToUse";
import { metadata } from './metadata'
import PlybackUi from "./components/PlaybackUi";
export {metadata}

const page = () => {
  return (
    <div className="pageContainer">
      <ToolsHero
        heading={`Playback Speed Calculator: Instantly Convert Video Time at Any Speed`}
        para={`Our playback speed calculator helps you determine exactly how much time you'll save when adjusting video playback. Whether you're speeding up tutorials to learn faster, slowing down complex lectures, or optimizing your YouTube viewing experience, this tool gives you precise new durations in seconds. Just enter your original video time and desired speed multiplier to see your adjusted viewing time.`}
      />
      
      <PlybackUi />
      
      <HowToUse
        heading={`How to Use Our Playback Speed Calculator`}
        para={`Using our video time after speed change calculator is straightforward. First, enter your original video duration in hours, minutes, and seconds. You can input these separately or use the total seconds field. Next, select or enter your desired playback speed – common options like 1.25x, 1.5x, 1.75x, and 2x are available, or you can input any custom speed multiplier.

The calculator instantly computes your new video duration, showing you exactly how much time you'll save. This fast forward time calculator works perfectly for YouTube videos, online courses, podcasts, or any media where playback speed can be adjusted. Use it as a speed multiplier time calculator to plan your learning sessions more efficiently or as a video acceleration calculator to estimate completion times for accelerated content.

For example, if you have a 45-minute lecture and watch it at 1.5x speed, our play back speed convertor will show you'll finish in just 30 minutes. This tool essentially serves as a video time after increasing playback speed tool, giving you control over your viewing schedule.`}
      />
      
      <ToolFAQs FAQs={FAQs} classes={`w-[95vw] md:w-[50vw]`} />
    </div>
  );
};

export default page;