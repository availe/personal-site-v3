import { projectData } from "@/data/project-data";
import { ProjectCard } from "./project-card";

export const ShowCase: React.FC = () => {
  return (
    <div
      className="
        columns-1
        sm:columns-2
        lg:columns-3
        gap-4
      "
    >
      {projectData.map((project, i) => (
        <div key={i} className="mb-4 break-inside-avoid">
          <ProjectCard
            title={project.title}
            description={project.description}
            videoSrc={project.videoSrc}
            isShort={project.isShort}
            buttonLink={project.buttonLink}
          />
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
