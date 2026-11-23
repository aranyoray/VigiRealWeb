import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-32 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-risk-unknown">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Nothing monitored here.</h1>
      <p className="max-w-md text-muted">
        That page does not exist. Unknown ranks above Moderate in the app, but on the web it just
        means the link is wrong.
      </p>
      <Link href="/" className="mt-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-deep hover:bg-white">
        Back to the home page
      </Link>
    </div>
  );
}
