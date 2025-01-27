"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { projectData } from "@/data/project-data";
import { ProjectCard } from "./project-card";

const Masonry = dynamic(() => import("react-masonry-css"), {
  ssr: false,
});

export const ShowCase: React.FC<{ onLoaded?: () => void }> = ({ onLoaded }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 2,
    768: 2,
    576: 1,
  };

  const sortedData = [...projectData].sort((a, b) => b.weight - a.weight);

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
      onLoaded?.();
    }
  }, [isLoaded, onLoaded]);

  return (
    <div className="w-full">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto ml-[-16px]"
        columnClassName="pl-[16px] bg-clip-padding"
      >
        {sortedData.map((project, idx) => (
          <div key={idx} className="mb-[16px]">
            <ProjectCard
              title={project.title}
              description={project.description}
              videoSrc={project.videoSrc}
              isShort={project.isShort}
              buttonLink={project.buttonLink}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ShowCase;
