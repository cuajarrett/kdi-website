import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { title } from "@/components/primitives";

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6 flex-grow min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className={title()}>Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-md">
        Sorry, the page you are looking for does not exist or may have been
        moved. Let us help you find what you need.
      </p>
      <div className="mt-8 flex gap-4">
        <Button as={Link} href="/" color="primary" variant="solid" size="lg">
          Go to Home
        </Button>
        <Button
          as={Link}
          href="/contact"
          color="primary"
          variant="bordered"
          size="lg"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}
