import ShowCase from "@/components/custom/hero/show-case";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <section className="py-24 flex flex-col justify-center text-center">
        <h1 className="text-3xl md:text-5xl">Hello, I&apos;m Rafael Diaz</h1>
        <p className="md:text-xl">
          Prev. Software Engineering Intern at Newmark
        </p>
        <div className="flex gap-4 justify-center pt-4">
        <Link href="/resume">
          <Button
            variant="outline"
          >
            View Resume
          </Button>
        </Link>

        <Link href="/projects">
          <Button
            variant="outline"
          >
            View Projects
          </Button>
        </Link>
        </div>
      </section>
      <h1 className="text-3xl md:text-3xl pl-4 pb-4">Video Showcase</h1>
      <ShowCase />
    </div>
  );
}
