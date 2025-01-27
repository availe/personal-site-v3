import { FC } from "react";
import Link from "next/link";

export const InfoSection: FC = () => {
  return (
    <section className="my-8 px-6 text-center">
      <div className="text-center bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="text-lg text-gray-600 font-medium mb-2">
          Use <span className="font-semibold">Command + B (Mac)</span> or{" "}
          <span className="font-semibold">Control + B (Windows)</span> to toggle
          the sidebar.
        </p>
        <p className="text-lg text-gray-600">
          Previous iterations of this website:
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <Link
            href="https://personal-website-v1-five.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            First Iteration
          </Link>
          <span className="text-gray-500 hidden md:block">|</span>
          <Link
            href="https://personal-website-v2-ochre.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Second Iteration
          </Link>
        </div>
      </div>
    </section>
  );
};
