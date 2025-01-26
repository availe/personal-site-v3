import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoPlayer } from "../video-player";

export const ShowCase: React.FC = () => {
  return (
    <div className="grid">
      <Card>
        <CardHeader>
          <CardTitle>Resume Builder V2</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <VideoPlayer
            src="https://www.youtube-nocookie.com/embed/vzwMjmTWf1A?si=nMU_z992mv7IwgLC"
            title="YouTube video player"
          />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShowCase;
