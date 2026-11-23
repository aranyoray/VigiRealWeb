/** Single source of truth for names, URLs and contact details used across the site. */
export const site = {
  name: "VigiReal",
  developer: "Ren DeWal",
  tagline:
    "Environmental-health risk for your area, from open U.S. government data.",
  description:
    "VigiReal turns CDC, NWS, USGS and state health-department open data into one 0–100 risk score for every U.S. county and 478 New York waterbodies. Private by design: nothing leaves your phone.",
  // Assumed from the bundle identifier org.vigireal.app. Change here if the real domain differs.
  domain: "vigireal.org",
  url: "https://vigireal.org",
  supportEmail: "aranyoray@gmail.com",
  /** Leave empty until the App Store listing is live; the buttons switch to "Coming soon". */
  appStoreUrl: "",
  bundleId: "org.vigireal.app",
  version: "1.1",
  policyEffective: "2026-11-23",
  minimumIOS: "17.0",
} as const;
