import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold">
          {site.name}
        </a>
        <ul className="flex gap-5 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href} className={link.href === "#skills" ? "hidden sm:block" : ""}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
