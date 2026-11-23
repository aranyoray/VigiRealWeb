import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, lede, children, className = "" }: Props) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {lede && <p className="mt-4 text-lg leading-relaxed text-muted">{lede}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
