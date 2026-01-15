import React from "react";
import Descriptions from "./Descriptions";
import WhatWeOffer from "./WhatWeOffer";

const AboutPage = () => {
  return (
    <div className="my-5 md:my-10 flex gap-7 flex-col md:w-[50vw] w-[95vw] h-full">
        <Descriptions
        heading={`About Calcora`}
        para={`Welcome to Calcora!
We provide 100+ easy-to-use online calculators for finance, math, conversions, construction, and scientific calculations. Our goal is to save you time and provide accurate results instantly, helping you make smarter decisions without any hassle. Whether you’re managing your personal finances, calculating profits, or solving math problems, our tools are designed to simplify your tasks and give you reliable answers in seconds.`}
      />
    
      <Descriptions
        heading={`Our Mission`}
        para={`  Our mission is to make everyday calculations simple, accurate, and
        accessible to everyone. We understand that handling numbers,
        conversions, or financial planning can be confusing and time-consuming.
        That’s why we created a platform that provides free, reliable, and
        easy-to-use calculators for a wide range of needs—from EMI and student
        loan calculations to math, construction, and scientific tools. We aim to
        empower our users to save time, make informed decisions, and confidently
        manage their tasks.`}
      />
      <Descriptions
        heading={`About Me`}
        para={` I’m Ansar ullah Khan, a passionate web developer and finance enthusiast from Afghanistan. I have a love for building practical online tools that help peple solve real-world problems. I created this website to provide free, accurate, and user-friendly calculators for everyone. My goal is to make complex calculations simple and accessible, whether you're a student, professional, or anyone in need of quick solutions.`}
      />

      <WhatWeOffer />
      <Descriptions
        heading={`Contact Us`}
        para={`Have questions or suggestions? Feel free to reach out to us at ansar.stack@gmail.com or connect with us on social media: [social links]. We love hearing from our users and are always looking to improve our tools and services.`}
      />
    </div>
  );
};

export default AboutPage;
