import Image from "next/image";
import Link from "next/link";
import { site } from "../site";
import { StoreButton } from "./StoreButton";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#data", label: "Data" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-deep/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Image
            src="/img/app-icon-256.png"
            alt=""
            width={32}
            height={32}
            className="rounded-[9px] ring-1 ring-white/10"
            priority
          />
          <span>{site.name}</span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <StoreButton size="sm" />
      </nav>
    </header>
  );
}
