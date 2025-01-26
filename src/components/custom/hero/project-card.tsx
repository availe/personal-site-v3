import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "../video-player";

interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc: string;
  isShort?: boolean;
  buttonLink?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  videoSrc,
  isShort = false,
  buttonLink,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <VideoPlayer src={videoSrc} title={title} isShort={isShort} />
      </CardContent>

      {buttonLink && (
        <CardFooter>
          <Button asChild>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
