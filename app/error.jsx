"use client";

import { Button } from "@nextui-org/button";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] px-4">
      <div className="max-w-md w-full p-6 space-y-4 text-center shadow-lg">
        <h1>Oops! Something went wrong.</h1>
        <p color="gray">
          An unexpected error occurred. Please try again, or contact support if
          the issue persists.
        </p>
        <Button color="primary" className="w-full" onPress={() => reset()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
