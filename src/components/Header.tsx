"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center font-bold text-navy-900 text-lg">
              B
            </div>
            <div className="leading-tight">
              <span className="font-bold text-sm sm:text-base block">
                Butler&apos;s Construction
              </span>
              <span className="text-gold-400 text-xs hidden sm:block">
                & Service Solutions
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-gold-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm hover:text-gold-400 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm hover:text-gold-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-sm hover:text-gold-400 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm hover:text-gold-400 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={COMPANY.phoneHref} className="text-gold-400 font-semibold text-sm">
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="bg-gold-500 text-navy-900 px-4 py-2 rounded text-sm font-semibold hover:bg-gold-400 transition-colors"
            >
              Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-navy-800 border-t border-navy-700">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gold-400">Home</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gold-400">Services</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gold-400">About</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gold-400">Blog</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gold-400">Contact</Link>
            <div className="pt-3 border-t border-navy-700">
              <a href={COMPANY.phoneHref} className="text-gold-400 font-semibold block mb-3">
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-gold-500 text-navy-900 px-4 py-2 rounded text-sm font-semibold hover:bg-gold-400 transition-colors inline-block"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
