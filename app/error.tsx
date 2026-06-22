"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO (todo.md): forward to an error-monitoring service (e.g. Sentry).
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-gutter text-center">
      <span className="font-label-md text-label-md uppercase tracking-[0.3em] text-gold-accent mb-6">
        Something went wrong
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 max-w-[34rem]">
        We&apos;re sorry — an unexpected error occurred.
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-10 max-w-[32rem]">
        Please try again. If the problem persists, reach out and we&apos;ll be
        happy to help.
      </p>
      <button
        onClick={reset}
        className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-md uppercase tracking-widest hover:bg-primary-container transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
