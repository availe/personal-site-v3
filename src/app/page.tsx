import { ContentWrapper } from "@/components/custom/home-page/content-wrapper";
import { IntroSection } from "@/components/custom/home-page/intro-section";
import { Separator } from "@radix-ui/react-separator";

const Home = () => (
  <main className="w-full md:px-12">
    {/* Hero Section */}
    <IntroSection />

    {/* Separator */}
    <div className="my-12">
      <Separator className="bg-gray-200 h-px w-10/12 mx-auto" />
    </div>

    {/* Video Showcase and Footer */}
    <ContentWrapper />
  </main>
);

export default Home;
