import { site } from "../site";

/** App Store call to action. Renders a disabled "Coming soon" pill until site.appStoreUrl is set. */
export function StoreButton({ size = "md" }: { size?: "sm" | "md" }) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  const dims = size === "sm" ? "h-9 px-4 text-sm" : "h-12 px-6 text-base";
  const icon = (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} fill="currentColor">
      <path d="M16.37 12.62c.03 2.77 2.43 3.69 2.46 3.7-.02.07-.39 1.32-1.27 2.62-.77 1.12-1.56 2.24-2.82 2.26-1.23.02-1.63-.73-3.04-.73s-1.85.71-3.02.75c-1.21.05-2.14-1.21-2.91-2.33-1.58-2.29-2.79-6.46-1.17-9.28.81-1.4 2.25-2.29 3.81-2.31 1.19-.02 2.31.8 3.04.8.72 0 2.09-.99 3.52-.84.6.02 2.28.24 3.36 1.82-.09.05-2.01 1.17-1.96 3.54ZM14.05 5.6c.64-.78 1.08-1.86.96-2.94-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.79-.98 2.85 1.03.08 2.09-.53 2.74-1.31Z" />
    </svg>
  );
  if (!site.appStoreUrl) {
    return (
      <span
        aria-disabled="true"
        title="The App Store listing is not live yet"
        className={`${base} ${dims} cursor-default border border-line bg-surface text-muted`}
      >
        {icon}
        <span className={size === "sm" ? "hidden sm:inline" : ""}>Coming soon to the App Store</span>
        <span className={size === "sm" ? "sm:hidden" : "hidden"}>Coming soon</span>
      </span>
    );
  }
  return (
    <a
      href={site.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${dims} bg-ink text-deep hover:bg-white`}
    >
      {icon}
      <span>Download on the App Store</span>
    </a>
  );
}
