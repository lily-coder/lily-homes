import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-gutter text-center">
      <span className="font-display-lg text-display-lg text-gold-accent/30 leading-none mb-4">
        404
      </span>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 max-w-[34rem]">
        This page has moved on
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-10 max-w-[32rem]">
        The page you&apos;re looking for doesn&apos;t exist or has been relocated.
        Let&apos;s get you back home.
      </p>
      <Link
        href="/"
        className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-md uppercase tracking-widest hover:bg-primary-container transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
