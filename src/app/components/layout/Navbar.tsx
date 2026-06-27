"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
            type="text"
            placeholder="Search companies, founders, products..."
            className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#FF3B5C] font-medium text-[#FF3B5C] border-b-2 border-[#FF3B5C] pb-0.5">
            Companies
          </Link>
          <Link href="/products" className="hover:text-[#FF3B5C] transition-colors">
            Products
          </Link>
          <Link href="/investors" className="hover:text-[#FF3B5C] transition-colors">
            Investors
          </Link>
          <span className="hover:text-[#FF3B5C] transition-colors cursor-pointer">Funding</span>
          <span className="hover:text-[#FF3B5C] transition-colors cursor-pointer">Jobs</span>
          <span className="hover:text-[#FF3B5C] transition-colors cursor-pointer">News</span>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1.5 transition-colors">
            Log In
          </button>
          <button className="btn-primary">
            Sign up
          </button>
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
          <Link href="/" className="text-[#FF3B5C] font-medium">Companies</Link>
          <Link href="/products" className="hover:text-[#FF3B5C]">Products</Link>
          <Link href="/investors" className="hover:text-[#FF3B5C]">Investors</Link>
          <span className="hover:text-[#FF3B5C] cursor-pointer">Funding</span>
          <span className="hover:text-[#FF3B5C] cursor-pointer">Jobs</span>
          <span className="hover:text-[#FF3B5C] cursor-pointer">News</span>
          <div className="flex gap-2 pt-2 border-t border-gray-100">
            <button className="btn-outline flex-1">Log In</button>
            <button className="btn-primary flex-1">Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
}