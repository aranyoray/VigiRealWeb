import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `${site.name} does not collect, store, sell or share any personal data. Here is exactly what the app does with your information.`,
  alternates: { canonical: "/privacy" },
};

const permissions = [
  {
    name: "Location (while using the app)",
    why: "Ranks nearby places and selects your state. Read on the device, never transmitted, not stored after the app closes.",
    optional: "Optional. Pick a state manually instead.",
  },
  {
    name: "Camera and photo library",
    why: "Attach a photo to a field report. Photos are resized and saved inside the app with location and camera metadata removed.",
    optional: "Optional. Requested only when you tap “Take a photo”.",
  },
  {
    name: "Notifications",
    why: "Tell you when a watched place crosses your risk threshold. Scheduled locally on the phone; no push server exists.",
    optional: "Optional. Requested only when you turn on risk alerts.",
  },
  {
    name: "Background App Refresh",
    why: "Lets iOS wake the app occasionally to refresh watched places so an alert can be generated.",
    optional: "Controlled by iOS settings. The app works without it.",
  },
];

export default function PrivacyPage() {
  const effective = new Date(site.policyEffective).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Privacy policy</p>
      <h1 className="text-4xl font-semibold tracking-tight">
        {site.name} does not collect, store, sell or share any personal data.
      </h1>
      <p className="mt-4 text-sm text-muted">
        Effective {effective}. Applies to the {site.name} iOS app, bundle identifier {site.bundleId}.
      </p>

      <div className="prose-site mt-6">
        <p>
          That sentence is the whole policy. The rest of this page explains what the app does with the
          information it touches, so you can check the claim rather than take it on trust. The same facts
          are declared in the app’s bundled privacy manifest and on its App Store privacy label, which reads
          “Data Not Collected”.
        </p>

        <h2 id="on-device">What the app does with your information</h2>
        <ul>
          <li>
            <strong>Location.</strong> If you allow it, {site.name} reads your location on your device to
            rank nearby places and select your state. Your location is never sent to us or to anyone else,
            and it is not stored after the app closes.
          </li>
          <li>
            <strong>Photos and field reports.</strong> Photos you take or choose, and the notes you write,
            are saved only inside the app on your device. Location and camera metadata are removed from
            photos before saving. You can delete any report at any time. Deleting the app deletes them all.
          </li>
          <li>
            <strong>Watchlist and preferences.</strong> Your watched places, guidance role and alert
            thresholds are stored only on your device.
          </li>
          <li>
            <strong>Notifications.</strong> Alerts are generated on your device from data the app
            downloaded. No push server is involved and no device token is created.
          </li>
        </ul>

        <h2 id="permissions">Permissions the app may ask for</h2>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-xs uppercase tracking-wider text-muted">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">Permission</th>
              <th scope="col" className="px-4 py-3 font-medium">Used for</th>
              <th scope="col" className="hidden px-4 py-3 font-medium sm:table-cell">Required?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {permissions.map((p) => (
              <tr key={p.name} className="align-top">
                <th scope="row" className="px-4 py-3 font-medium text-ink">{p.name}</th>
                <td className="px-4 py-3 text-muted">
                  {p.why}
                  <span className="mt-1 block text-xs sm:hidden">{p.optional}</span>
                </td>
                <td className="hidden px-4 py-3 text-muted sm:table-cell">{p.optional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-site">
        <h2 id="network">Network activity</h2>
        <p>
          {site.name} downloads public data from U.S. government services: the Centers for Disease Control
          and Prevention (data.cdc.gov), the National Weather Service (api.weather.gov), the U.S. Geological
          Survey (waterservices.usgs.gov) and the New York State Department of Health (health.data.ny.gov).
          The only information sent to them is the two-letter code of the state you are viewing, plus the
          technical connection details every web request carries, such as your IP address, which are governed
          by those agencies’ own privacy policies. No request is made to any server operated by us.
        </p>

        <h2 id="not">What we do not do</h2>
        <ul>
          <li>No accounts and no sign-in.</li>
          <li>No analytics, crash-reporting or advertising SDKs.</li>
          <li>No tracking across apps or websites, and no advertising identifier.</li>
          <li>No third-party code that could collect data on our behalf.</li>
          <li>No sale, rental or transfer of data, because there is none to transfer.</li>
        </ul>

        <h2 id="children">Children</h2>
        <p>{site.name} is rated 4+ on the App Store and collects no data from anyone, including children.</p>

        <h2 id="apple">Data Apple may process</h2>
        <p>
          If you download the app from the App Store, Apple processes your purchase history, crash logs you
          have opted to share, and similar data under Apple’s own privacy policy. We do not receive any of it
          in identifiable form.
        </p>

        <h2 id="website">This website</h2>
        <p>
          This site is static. It sets no cookies and runs no analytics. Server logs kept by the hosting
          provider may record your IP address and the pages you request for security and operational
          purposes, and are governed by that provider’s policy.
        </p>

        <h2 id="changes">Changes</h2>
        <p>
          If this policy changes, the new version will be posted at this address with a new effective date.
          A change that lets the app transmit any personal data would also require a new app version and
          an updated App Store privacy label.
        </p>

        <h2 id="contact">Contact</h2>
        <p>
          Questions about privacy: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. For
          everything else, see <Link href="/support">support</Link>.
        </p>
      </div>
    </div>
  );
}
