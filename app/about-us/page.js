import ToolsHero from "@/app/components/ToolsHero";
import AboutPage from "./components/AboutPage";
import { metadata } from "./metadata";
export { metadata };
const page = () => {
  return (
    <div className="w-full min-h-screen  flex justify-center">
        <AboutPage />
    </div>
  );
};

export default page;
