import { VideoPlayer } from "@/components/custom/video-player";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <VideoPlayer src="https://www.youtube-nocookie.com/embed/vzwMjmTWf1A?si=nMU_z992mv7IwgLC" title="YouTube video player" /> 
    </div>
  );
}
