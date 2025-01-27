import { InfoSection } from "@/components/custom/home-page/info-section";
import { IntroSection } from "@/components/custom/home-page/intro-section";
import ShowCase from "@/components/custom/home-page/show-case";
import { Separator } from "@radix-ui/react-separator";

const Home = () => (
  <main className="w-full md:px-12">
    {/* Hero Section */}
    <IntroSection />

    {/* Separator */}
    <div className="my-12">
      <Separator className="bg-gray-200 h-px w-10/12 mx-auto" />
    </div>

    {/* Video Showcase Section */}
    <section className="w-full px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Project Showcase
      </h2>
      <ShowCase />
    </section>

    <InfoSection />
  </main>
);

export default Home;
