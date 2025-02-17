"use client"; // Next.js usa o modo "client" para interatividade
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Ativa o background após 50px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#1b1b1b]" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-6 px-12">
        <h1 className="text-xl font-bold">Leonardo Franca</h1>
        <nav>
          <ul className="flex gap-12 text-base font-medium uppercase">
            <li className="relative group">
              <a
                href=""
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Home
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a
                href=""
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Impossible List
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a
                href=""
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Curriculum
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
