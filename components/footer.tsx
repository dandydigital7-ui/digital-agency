import Link from "next/link";

const links = [
  { href: "/", label: "Domů" },
  { href: "/sluzby", label: "Služby" },
  { href: "/prace", label: "Práce" },
  { href: "/proces", label: "Proces" },
  { href: "/cenik", label: "Ceník" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-blue-500/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-bold tracking-wider text-[#f0f4ff]">EH</p>
          <p className="mt-2 text-sm text-[#f0f4ff]/70">
            Weby a AI pro podnikatele.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#f0f4ff]/70 transition hover:text-[#f0f4ff]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#c9a84c] transition hover:text-[#f6dd93]"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-blue-500/20 py-4 text-center text-xs text-[#f0f4ff]/55">
        © {new Date().getFullYear()} EH Studio. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
