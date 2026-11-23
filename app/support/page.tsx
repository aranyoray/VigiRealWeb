import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Support",
  description: `Help, answers and contact details for the ${site.name} iOS app.`,
  alternates: { canonical: "/support" },
};

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Why does a place show Unknown?",
    a: (
      <>
        Unknown means the feeds that would score that place have not returned data yet, or the newest
        observation is too old to trust. Unknown deliberately ranks above Moderate in Triage: missing
        evidence is a reason to look, not a reason to relax. Pull down to refresh, and check the Data tab
        to see which feed is cached or unavailable.
      </>
    ),
  },
  {
    q: "My lake is High but the water looks fine. Why?",
    a: (
      <>
        The score fuses several signals, and the leading one is often not the water. Open the place: the
        sentence under the score names the leading signal in plain words, for example respiratory illness
        in the surrounding county. The hazard list below it shows each signal separately, and the
        calculation sheet shows every weight. A county flu wave does not mean the lake is unsafe to swim
        in; it means the county is where the risk is.
      </>
    ),
  },
  {
    q: "A feed says cached or unavailable.",
    a: (
      <>
        Government endpoints go down, change release identifiers, or rate-limit. When a feed fails,{" "}
        {site.name} uses its last successful response and labels it cached. If there is no cache it is
        marked unavailable and the rest of the app keeps working. USGS in particular can take up to a
        minute per state. If a feed stays unavailable for more than a day, email us the feed name shown
        in the Data tab.
      </>
    ),
  },
  {
    q: "I denied location access. Can I still use the app?",
    a: (
      <>
        Yes. Pick any state from the selector in the top corner, and search any county or lake from
        Triage. Location is only used to rank nearby places and choose your state. You can grant it
        later in Settings → Privacy &amp; Security → Location Services → {site.name}.
      </>
    ),
  },
  {
    q: "I watched a place but never got a notification.",
    a: (
      <>
        Alerts are generated on the phone after a background refresh, which iOS schedules at its own
        discretion. Check three things: notifications are allowed for {site.name} in Settings; Background
        App Refresh is on; Low Power Mode is off. A watched place only notifies once when it enters a band
        at or above your threshold, and re-arms when it drops back below.
      </>
    ),
  },
  {
    q: "Where do my field reports go?",
    a: (
      <>
        Nowhere, in this version. Reports and photos are saved inside the app on your device only, with
        location and camera metadata stripped from photos. The status label reads “Saved on this
        device”. They are never published as an advisory. If you see something urgent, contact your
        local or state health department directly.
      </>
    ),
  },
  {
    q: "Why does New York have lakes and tick data but my state does not?",
    a: (
      <>
        All 3,144 U.S. counties are scored on nationwide CDC data. Waterbody bloom confirmations, tick
        surveillance by region and influenza counts by county are published as open data only by New
        York State, so those layers exist only there. If your state publishes a comparable dataset,
        tell us and we will look at it.
      </>
    ),
  },
  {
    q: "How do I delete my data?",
    a: (
      <>
        Swipe to delete any report in the Report tab. Removing a place from Watch deletes its alert
        history. Deleting the app deletes everything, because nothing was ever stored anywhere else.
      </>
    ),
  },
  {
    q: "Is this medical advice?",
    a: (
      <>
        No. {site.name} is decision support built on official surveillance data. It does not diagnose,
        and it does not replace advisories from your state or local health department, which every
        place screen links to. In an emergency, call 911.
      </>
    ),
  },
];

const official = [
  ["CDC — Harmful algal blooms", "https://www.cdc.gov/harmful-algal-blooms/"],
  ["CDC — Ticks and tickborne disease", "https://www.cdc.gov/ticks/"],
  ["CDC — Respiratory illness data channel", "https://www.cdc.gov/respiratory-viruses/data/"],
  ["National Weather Service — active alerts", "https://www.weather.gov/alerts"],
  ["USGS — water data", "https://waterdata.usgs.gov/"],
  ["NY DEC — harmful algal blooms", "https://dec.ny.gov/environmental-protection/water/water-quality/harmful-algal-blooms"],
  ["Find your state health department (CDC)", "https://www.cdc.gov/public-health-gateway/php/about/index.html"],
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Support</p>
      <h1 className="text-4xl font-semibold tracking-tight">How can we help?</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Answers to the questions we hear most, and how to reach a person when they do not cover yours.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(`${site.name} support`)}`}
          className="group rounded-2xl border border-line bg-surface p-5 transition hover:border-white/25"
        >
          <p className="text-sm text-muted">Email</p>
          <p className="mt-1 font-medium text-accent group-hover:underline">{site.supportEmail}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            We read everything and usually reply within a few days.
          </p>
        </a>
        <div className="rounded-2xl border border-line bg-surface p-5">
          <p className="text-sm text-muted">When you write, include</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            <li>· iPhone or iPad model and iOS version</li>
            <li>· App version (shown at the bottom of the Data tab)</li>
            <li>· The place name and state</li>
            <li>· A screenshot of the Data tab if a feed looks wrong</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">Frequently asked</h2>
      <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-surface">
        {faqs.map((f) => (
          <details key={f.q} className="group px-5 py-4 open:bg-surface-2/60">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden="true" className="shrink-0 text-muted transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">Official sources</h2>
      <p className="mt-3 leading-relaxed text-muted">
        {site.name} is not affiliated with any agency. For advisories that carry legal weight, go to the
        source.
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {official.map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm transition hover:border-white/25"
            >
              <span>{label}</span>
              <span aria-hidden="true" className="text-muted">↗</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-16 text-sm text-muted">
        Looking for how your data is handled?{" "}
        <Link href="/privacy" className="text-accent underline-offset-4 hover:underline">
          Read the privacy policy.
        </Link>
      </p>
    </div>
  );
}
