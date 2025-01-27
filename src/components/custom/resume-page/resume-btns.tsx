import { Button } from "@/components/ui/button";

const ResumeBtns = () => {
  return (
    <div className="flex justify-center gap-4 mb-4 w-full">
      <a
        href="https://resume-builder.availe.io"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-1/3"
      >
        <Button variant="secondary" className="w-full">
          Check out Resume Builder
        </Button>
      </a>
      <a
        href="/Rafael_Diaz_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-1/3"
      >
        <Button variant="secondary" className="w-full">
          View in Full Page
        </Button>
      </a>
    </div>
  );
};

export default ResumeBtns;
