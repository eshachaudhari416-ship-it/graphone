"use client";
import DarkModeToggle from "../ui/DarkModeToggle";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Companies", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Investors", href: "/investors" },
    { label: "Funding", href: "/funding" },
    { label: "Jobs", href: "/jobs" },
    { label: "News", href: "/news" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-[#FF3B5C]">●</span>
          <span className="text-gray-900">GraphOne</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-72">
          <Search size={14} className="text-gray-400" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search companies, founders, products..."
            className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400"
          />
          <kbd className="text-[10px] text-gray-400 border border-gray-300 rounded px-1 py-0.5 font-mono leading-none">
            /
          </kbd>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#FF3B5C] transition-colors font-medium ${
                  isActive
                    ? "text-[#FF3B5C] border-b-2 border-[#FF3B5C] pb-0.5"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <DarkModeToggle />
          <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1.5 transition-colors">
            Log In
          </button>
          <button className="btn-primary">Sign up</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "text-[#FF3B5C] font-medium" : "hover:text-[#FF3B5C]"}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2 border-t border-gray-100">
            <button className="btn-outline flex-1">Log In</button>
            <button className="btn-primary flex-1">Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
}