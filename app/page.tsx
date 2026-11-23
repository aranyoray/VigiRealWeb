import Link from "next/link";
import { PhoneFrame } from "./components/PhoneFrame";
import { Section } from "./components/Section";
import { StoreButton } from "./components/StoreButton";
import { site } from "./site";

const bands = [
  { label: "Low", color: "bg-risk-low", note: "Routine. Normal activity." },
  { label: "Moderate", color: "bg-risk-moderate", note: "Stay aware. Check advisories before you go." },
  { label: "High", color: "bg-risk-high", note: "Limit exposure. Heed local guidance." },
  { label: "Critical", color: "bg-risk-critical", note: "Avoid. Follow the official advisory." },
  { label: "Unknown", color: "bg-risk-unknown", note: "Evidence missing. A reason to look, not to relax." },
];

const hazards = [
  { name: "Disease outbreak", color: "bg-hazard-disease", from: "CDC NSSP respiratory ED visits, CDC wastewater, NY influenza by county" },
  { name: "Water contamination", color: "bg-hazard-water", from: "NWS flood and hydrologic alerts, USGS gauge observations (proxy, not a water test)" },
  { name: "Algal bloom", color: "bg-hazard-bloom", from: "NY DEC confirmed-bloom record, scored by season and history" },
  { name: "Tick-borne", color: "bg-hazard-tick", from: "NYSDOH tick surveillance by region" },
  { name: "Chronic burden", color: "bg-hazard-chronic", from: "CDC PLACES county prevalence, a weight on the other signals" },
  { name: "Allergy", color: "bg-hazard-allergy", from: "Seasonal pollen burden, a weight on the other signals" },
];

const feeds = [
  ["NWS active alerts", "NOAA / National Weather Service", "All 50 states + DC", "Live"],
  ["USGS water observations", "U.S. Geological Survey", "All 50 states + DC", "Live"],
  ["NSSP respiratory ED visits", "Centers for Disease Control and Prevention", "All 50 states + DC", "Weekly"],
  ["Wastewater surveillance (NWSS)", "Centers for Disease Control and Prevention", "All 50 states + DC", "Several per week"],
  ["PLACES chronic burden", "Centers for Disease Control and Prevention", "All 3,144 counties", "Annual"],
  ["Influenza by county", "New York State Department of Health", "New York", "Weekly in season"],
  ["Tick risk by region", "New York State Department of Health", "New York", "Annual"],
  ["Confirmed-bloom record", "NY Department of Environmental Conservation", "478 NY waterbodies (bundled)", "Per season"],
];

const features = [
  {
    id: "map",
    shot: "/img/shots/map.png",
    alt: "VigiReal map tab showing New York with glowing risk nodes",
    title: "A map that shows where to look",
    body: "Glowing nodes sized and coloured by risk band, filterable by hazard type. Assess one state in seconds or sweep all 51 jurisdictions in about a minute. Lower-risk pins stay hidden so the picture reads at a glance.",
  },
  {
    id: "triage",
    shot: "/img/shots/triage.png",
    alt: "VigiReal triage list ranking New York places by risk band",
    title: "Triage: highest risk first",
    body: "Every monitored place in a state, ordered by band and then by score. Search any state, county or lake. The header tells you how many places are scored and how many feeds are live right now.",
  },
  {
    id: "place",
    shot: "/img/shots/place.png",
    alt: "Cayuga Lake detail screen with a 34 Moderate score and plain-language guidance",
    title: "Plain words, then the maths",
    body: "Each place names its leading signal in a sentence, so a lake driven by county flu is never mistaken for a swimming warning. Guidance is written for a resident, a clinician or a public-health authority. Tap through for the full calculation sheet: every signal, weight, source and timestamp.",
  },
  {
    id: "watch",
    shot: "/img/shots/watch.png",
    alt: "VigiReal watch tab with risk alerts and guidance-role settings",
    title: "Follow a place. Get told.",
    body: "Tap the bell on the lake you swim in or the county your parents live in. VigiReal refreshes in the background and notifies you when a watched place crosses your threshold. Alerts are generated on your phone from the same score you see on screen.",
  },
  {
    id: "report",
    shot: "/img/shots/report.png",
    alt: "VigiReal field reports tab",
    title: "Field reports, kept on your phone",
    body: "Photograph discoloured water, a scum mat, a fish kill or a tick hotspot and log it with location and notes. Photos are stored at reduced size with camera metadata stripped. Reports stay on the device in this version and never become an advisory on their own.",
  },
  {
    id: "data",
    shot: "/img/shots/data.png",
    alt: "VigiReal data and models tab showing coverage and live feed status",
    title: "Data & models, in the open",
    body: "See which feeds are live, cached or unavailable at this moment, which dataset release each one is pinned to, how the bloom model was validated against real outcomes, and a frank list of known limitations.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="glow relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              iOS {site.minimumIOS}+ · iPhone and iPad · free
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              One risk score for the water you swim in and the county you live in.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {site.name} fuses live CDC, National Weather Service, USGS and state
              health-department open data into a single 0–100 score for every U.S. county
              and 478 New York lakes. All of it is computed on your phone. None of it leaves.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <StoreButton />
              <Link
                href="#score"
                className="inline-flex h-12 items-center rounded-full border border-line px-6 text-base text-ink transition hover:border-white/25"
              >
                How the score works
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["3,144", "U.S. counties scored"],
                ["478", "New York waterbodies"],
                ["7", "live government feeds"],
                ["0", "bytes of your data collected"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="order-first text-3xl font-semibold tabular-nums tracking-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center md:justify-end">
            <PhoneFrame
              src="/img/shots/place.png"
              alt="Cayuga Lake in VigiReal: score 34, Moderate, with the sentence that names the leading signal"
              priority
              width={320}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <Section
        id="features"
        eyebrow="Features"
        title="Built to be read in a hurry and trusted on a second look."
        lede="Five tabs. Each one answers a question you would otherwise have to chase across six agency websites."
      >
        <div className="space-y-24">
          {features.map((f, i) => (
            <article
              key={f.id}
              id={f.id}
              className={`grid scroll-mt-24 items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="flex justify-center">
                <PhoneFrame src={f.shot} alt={f.alt} width={280} />
              </div>
              <div className="max-w-md">
                <h3 className="text-2xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Score */}
      <Section
        id="score"
        eyebrow="The score"
        title="0 to 100, five bands, and every number shows its work."
        lede="Six hazard signals are fused per place and weighted by local chronic-disease and pollen burden. Confidence comes from how fresh the surveillance is: high when the newest observation is 8 days old or less, medium up to 21 days, low beyond that."
        className="border-t border-line bg-surface/40"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Risk bands</h3>
            <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-surface">
              {bands.map((b) => (
                <li key={b.label} className="flex items-start gap-3 px-4 py-3">
                  <span className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${b.color}`} aria-hidden="true" />
                  <div>
                    <p className="font-medium">{b.label}</p>
                    <p className="text-sm text-muted">{b.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Unknown ranks above Moderate in every list. Missing evidence is a reason to look, not a
              reason to relax.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Hazard signals</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {hazards.map((h) => (
                <li key={h.name} className="rounded-2xl border border-line bg-surface p-4">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${h.color}`} aria-hidden="true" />
                    <p className="font-medium">{h.name}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{h.from}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Modelled signals, such as a bloom estimate outside a confirmed record, add breadth but are
              never allowed to set the peak on their own.
            </p>
          </div>
        </div>
      </Section>

      {/* Data */}
      <Section
        id="data"
        eyebrow="Data sources"
        title="Seven open government endpoints. No API keys. Nothing hidden."
        lede="Feeds are joined to places on county FIPS code, never on a name. Any feed that fails falls back to its last cached response and is labelled as cached instead of being dropped silently."
      >
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-surface text-xs uppercase tracking-wider text-muted">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">Feed</th>
                <th scope="col" className="px-4 py-3 font-medium">Agency</th>
                <th scope="col" className="px-4 py-3 font-medium">Coverage</th>
                <th scope="col" className="px-4 py-3 font-medium">Cadence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {feeds.map((row) => (
                <tr key={row[0]} className="hover:bg-surface/60">
                  <th scope="row" className="px-4 py-3 font-medium text-ink">{row[0]}</th>
                  <td className="px-4 py-3 text-muted">{row[1]}</td>
                  <td className="px-4 py-3 text-muted">{row[2]}</td>
                  <td className="px-4 py-3 text-muted">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted">
          Waterbody bloom surveillance, tick density and county influenza counts ship for New York,
          the only state publishing them as open data. Dataset identifiers are pinned to a release and
          the verification date is shown inside the app.
        </p>
      </Section>

      {/* Privacy */}
      <Section
        id="privacy"
        eyebrow="Privacy"
        title="Fused on your device. Nothing you do here leaves your phone."
        className="border-t border-line bg-surface/40"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["No account, no tracking", "No sign-in, no analytics SDK, no ads, no third-party code. The App Store privacy label reads Data Not Collected."],
            ["Location stays local", "Used only to rank nearby places and pick your state. It is never transmitted or stored off the device."],
            ["Reports and photos stay local", "Saved inside the app with camera metadata stripped. Delete a report, or the app, and they are gone."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-medium">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          The only network traffic is HTTPS to public government endpoints, and the only parameter sent is
          the two-letter code of the state you are viewing.{" "}
          <Link href="/privacy" className="text-accent underline-offset-4 hover:underline">
            Read the full privacy policy.
          </Link>
        </p>
      </Section>

      {/* Disclaimer + CTA */}
      <section className="glow border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Decision support, not a diagnosis.
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  {site.name} is not a medical device and is not affiliated with or endorsed by any
                  government agency. Official public-health advisories are the source of truth, and
                  every place screen links to them. In an emergency, call 911.
                </p>
                <p className="mt-3 text-sm text-muted">Built for the Congressional App Challenge.</p>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <StoreButton />
                <Link href="/support" className="text-sm text-muted hover:text-ink">
                  Questions? Visit support →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
