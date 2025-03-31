"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen ? "bg-[#000033]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-4 md:py-6 md:px-12">
        <h1 className="text-xl font-bold">Leonardo Franca</h1>

        {/* Menu para desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 lg:gap-12 text-base font-medium uppercase">
            {renderNavItems()}
          </ul>
        </nav>

        {/* Botão Hamburguer para mobile */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu para mobile */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full h-full bg-[#00004B] transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="p-4">
            <ul className="flex flex-col items-center gap-8 text-lg font-medium uppercase">
              {renderNavItems(closeMenu)}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );

  function renderNavItems(closeMenu?: () => void) {
    const items = [
      { name: "Home", href: "/" },
      { name: "Impossible List", href: "/impossible" },
      { name: "Curriculum", href: "/curriculum" },
    ];

    return items.map((item) => (
      <li key={item.name} className="relative group">
        <a
          href={item.href}
          className="hover:text-gray-300 transition-colors duration-300"
          onClick={closeMenu}
        >
          {item.name}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    ));
  }
}
