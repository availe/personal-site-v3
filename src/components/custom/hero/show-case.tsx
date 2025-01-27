"use client";

import dynamic from "next/dynamic";
import { projectData } from "@/data/project-data";
import { ProjectCard } from "./project-card";

const Masonry = dynamic(() => import("react-masonry-css"), {
  ssr: false,
});

export const ShowCase: React.FC = () => {
  // Configure how many columns you want at various breakpoints
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 2,
    768: 2,
    576: 1,
  };

  return (
    <div className="w-full">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        // Offsets column padding to ensure the first column aligns with the container edge
        className="flex w-auto ml-[-16px]"
        // Adds gutter between columns and prevents background bleed
        columnClassName="pl-[16px] bg-clip-padding"
      >
        {projectData.map((project, idx) => (
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
