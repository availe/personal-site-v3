import { Button } from "@/components/ui/button";
import Link from "next/link";

export const IntroSection = () => (
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
      <Link href="https://www.linkedin.com/in/rafael-diaz1" target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          className="px-6 py-3 text-base hover:shadow-lg hover:bg-gray-200 transition-all"
        >
          View LinkedIn
        </Button>
      </Link>
    </div>
  </section>
);
