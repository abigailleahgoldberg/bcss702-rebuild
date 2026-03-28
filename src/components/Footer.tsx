import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center font-bold text-navy-900 text-lg">
                B
              </div>
              <div className="leading-tight">
                <span className="font-bold block">Butler&apos;s Construction</span>
                <span className="text-gold-400 text-xs">& Service Solutions</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Las Vegas&apos;s trusted general contractor. Licensed, insured, and
              backed by decades of construction experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gold-400 mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gold-400 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-400 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-slate-400 text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-slate-400 text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gold-400 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href={COMPANY.phoneHref} className="hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li>{COMPANY.location}</li>
              <li>
                <a
                  href={COMPANY.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Licensed &amp; Insured &bull; Las Vegas, NV
          </p>
        </div>
      </div>
    </footer>
  );
}
