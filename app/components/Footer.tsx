import Link from "next/link";
import { site } from "../site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {site.tagline} Decision support, not a diagnosis. Official public-health
            advisories are the source of truth. In an emergency, call 911.
          </p>
          <p className="mt-4 text-xs text-muted">
            Not affiliated with or endorsed by the CDC, NOAA, USGS or any state agency.
            Built for the Congressional App Challenge.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium text-ink">App</p>
          <ul className="space-y-2 text-muted">
            <li><Link className="hover:text-ink" href="/#features">Features</Link></li>
            <li><Link className="hover:text-ink" href="/#score">How the score works</Link></li>
            <li><Link className="hover:text-ink" href="/#data">Data sources</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium text-ink">Help</p>
          <ul className="space-y-2 text-muted">
            <li><Link className="hover:text-ink" href="/support">Support</Link></li>
            <li><Link className="hover:text-ink" href="/privacy">Privacy policy</Link></li>
            <li>
              <a className="hover:text-ink" href={`mailto:${site.supportEmail}`}>
                {site.supportEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted sm:px-6">
          © 2026 {site.name}. Version {site.version} · requires iOS {site.minimumIOS} or later.
        </p>
      </div>
    </footer>
  );
}
