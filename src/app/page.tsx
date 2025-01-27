import ShowCase from "@/components/custom/hero/show-case";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="pt-24 pb-6 px-4 flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Hello, I&apos;m Rafael Diaz
        </h1>
        <p className="md:text-lg text-gray-500 mb-6">
          Prev. Software Engineering Intern at Newmark
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/resume">
            <Button
              variant="outline"
              className="px-6 py-3 text-base hover:shadow-lg hover:bg-gray-200 transition-all"
            >
              View Resume
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              variant="outline"
              className="px-6 py-3 text-base hover:shadow-lg hover:bg-gray-200 transition-all"
            >
              View Projects
            </Button>
          </Link>
        </div>
      </section>

      {/* Separator */}
      <div className="my-12">
        <Separator className="bg-gray-200 h-px w-10/12 mx-auto" />
      </div>

      {/* Video Showcase Section */}
      <section className="w-full px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Video Showcase
        </h2>
        <ShowCase />
      </section>
    </div>
  );
}
