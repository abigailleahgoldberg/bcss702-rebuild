import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="bg-navy-900 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Whether you&apos;re planning a kitchen remodel, bathroom renovation, or
          commercial buildout in Las Vegas, we&apos;re here to help. Get a free
          quote today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-gold-500 text-navy-900 px-8 py-3 rounded font-semibold hover:bg-gold-400 transition-colors"
          >
            Get a Free Quote
          </Link>
          <a
            href={COMPANY.phoneHref}
            className="border border-gold-500 text-gold-400 px-8 py-3 rounded font-semibold hover:bg-navy-800 transition-colors"
          >
            Call {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
