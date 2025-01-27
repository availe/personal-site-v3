"use client";

import { useState } from "react";
import ShowCase from "@/components/custom/home-page/show-case";
import { InfoSection } from "@/components/custom/home-page/info-section";

export const ContentWrapper: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <section className="w-full px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Project Showcase
        </h2>
        <ShowCase onLoaded={() => setShowInfo(true)} />
      </section>
      {showInfo && <InfoSection />}
    </>
  );
};
