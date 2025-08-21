// components/Header.tsx
import React from "react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Plants", href: "/plants" },
];

const Header: React.FC = () => {
  return (
    <header className="w-full p-6 flex justify-between items-center bg-black/50 backdrop-blur-md text-amber-200 shadow-md fixed top-0 z-50">
      <h1 className="text-2xl sm:text-3xl font-bold cinzel-regular">
        Magical Botany Guide
      </h1>
      <nav className="space-x-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-amber-400 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
