import React from "react";

const Privacy = () => {
  return (
    <div className="my-5 flex  flex-col">
      <h2 className="heading self-start">Information We Collect</h2>
      <p>
        When you use our website, we may collect the following types of
        information:
      </p>
      <ul className="list-decimal ms-6">

        <li className="font-bold">Personal Information</li>
        <p>
          We do not require you to register or provide personal details to use
          our calculators. If you contact us via email or forms, we may collect
          your name, email address, and message.
        </p>
        <li className="font-bold">Non-Personal Information</li>
        <p>
          {" "}
          We automatically collect certain non-identifiable information when you
          visit our website, including:{" "}
        </p>
        <ul className="list-disc ms-5 mt-2">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type (mobile, tablet, desktop)</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring websites</li>
          <p>
            This information is used to improve our website, analyze trends, and
            enhance user experience.
          </p>
        </ul>
        <li className="font-bold mt-1">How We Use Your Information</li>
        <p>We use the collected information for the following purposes:</p>
        <ul className="list-disc ms-5">
          <li>To Improve Website Functionality</li>
          <li>Enhance the performance of our calculators and tools.</li>
          <li>Identify and fix errors or bugs.</li>
          <li>Understand which calculators are most popular.</li>
          <li>Respond to user inquiries or feedback if you contact us.</li>
          <li>Advertising and Monetization</li>
          <li>Display personalized or non-personalized ads through platforms like Google AdSense.</li>
        </ul>
        
        <li className="font-bold mt-1">Third-Party Services</li>
        <p>We may use third-party services that collect, store, or process your data:</p>
        <ul className="list-disc ms-5">
          <li>Google AdSense: Displays ads on our site. Google may collect anonymized information to provide personalized ads.</li>
          <li>ins what data we collect, how we use it, and your rights regarding your information wAnalytics Tools: Tools like Google Analytics to monitor website performance.</li>
          <li>Other Third-Party Services: Any service that helps improve our website or provide content.</li>
          <p>We do not share your personal information with third parties for marketing purposes without your consent.</p>
        </ul>
      <li className="font-bold mt-1">
        External Links
      </li>
      <p>Our website may contain links to external sites for tools, references, or additional resources.
         We are not responsible for the privacy practices of these external websites.
         We recommend reading their privacy policies when you visit them.
      </p>
      <li className="mt-1 font-bold">Contact Us</li>
      <p>If you have any questions or concerns about this Privacy Policy or your data, you can contact us at ansar.stact@gmail.com. We will respond to inquiries as quickly as possible and take your privacy seriously.</p>
      
      </ul>
    </div>
  );
};

export default Privacy;
