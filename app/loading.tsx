export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-6">
      <div
        className="h-12 w-12 rounded-full border-2 border-secondary-container border-t-gold-accent animate-spin"
        role="status"
        aria-label="Loading"
      />
      <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-secondary">
        Lily Home Interiors
      </p>
    </div>
  );
}
