import ToolsHero from "@/app/components/ToolsHero";
import { metadata } from "./metadata";
import Privacy from "./components/Privacy";
import Descriptions from "../about-us/components/Descriptions";
export { metadata };
const page = () => {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="my-5 md:my-10 md:w-[50vw] w-[95vw] h-full ">
        <Descriptions heading={`Calcora Privacy Policy`}
        para={`At Calcora, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your information when you visit our website and use our calculators and tools.`}/>
        <Privacy />
      </div>
    </div>
  );s
};

export default page;
