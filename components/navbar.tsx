"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Domů" },
  { href: "/sluzby", label: "Služby" },
  { href: "/prace", label: "Práce" },
  { href: "/proces", label: "Proces" },
  { href: "/cenik", label: "Ceník" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-40 mx-auto w-full max-w-6xl px-4 pt-4">
      <div className="flex items-center justify-between rounded-full border border-blue-500/30 bg-[#06000f]/45 px-4 py-2 backdrop-blur-xl">
        <Link href="/" className="text-lg font-bold tracking-wider text-[#f0f4ff]">
          EH
        </Link>
        <nav className="relative flex items-center gap-1 rounded-full bg-[#06000f]/50 p-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative z-10 rounded-full px-4 py-2 text-sm transition ${
                  isActive ? "text-white" : "text-[#f0f4ff]/75 hover:text-white"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 35 }}
                    className="absolute inset-0 -z-10 rounded-full bg-[#2563eb]"
                  />
                ) : null}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
