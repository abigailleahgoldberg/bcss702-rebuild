import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: `Residential Remodeling Las Vegas | ${COMPANY.name}`,
  description:
    "Whole-home remodeling and residential renovations in Las Vegas, NV. Room additions, home expansions, interior renovations, and complete home makeovers by licensed general contractors.",
};

const relatedSlugs = ["bathroom-remodeling", "kitchen-remodeling", "design-build"];
const relatedServices = SERVICES.filter((s) => relatedSlugs.includes(s.slug));

export default function ResidentialPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold mb-3 uppercase tracking-wide text-sm">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Residential Remodeling
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Make your house the home you&apos;ve always wanted.{" "}
            {COMPANY.shortName} specializes in whole-home remodeling and
            renovations for Las Vegas homeowners.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Whole-Home Renovations for Las Vegas Living
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Las Vegas homes face unique challenges — from the intense desert
                heat that stresses building materials to the rapidly growing
                communities across Henderson, Summerlin, and North Las Vegas.
                Whether you&apos;ve purchased a fixer-upper, need to update an
                aging home, or want to expand your living space for a growing
                family, {COMPANY.shortName} provides comprehensive residential
                remodeling services that transform your entire home.
              </p>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                What Our Residential Remodeling Includes
              </h3>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Whole-home interior renovations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Room additions and home expansions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Open floor plan conversions and wall removal
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Flooring replacement — tile, hardwood, LVP, and carpet
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Interior and exterior painting
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Drywall repair, texturing, and accent walls
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Electrical panel upgrades and rewiring
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Garage conversions and ADU (accessory dwelling unit)
                  construction
                </li>
              </ul>

              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Why Choose {COMPANY.shortName}?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Remodeling your home is a major investment, and you deserve a
                contractor who treats it that way. We provide detailed project
                scopes, transparent pricing, and regular progress updates. Our
                team is experienced with every style of Las Vegas home — from
                mid-century tract homes to modern desert contemporary builds. We
                handle all permits through Clark County and manage every
                subcontractor so you have one team to call.
              </p>
            </div>

            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center rounded-lg">
                <span className="text-slate-400 text-sm">Project Photo</span>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center rounded-lg">
                <span className="text-slate-400 text-sm">Project Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-slate-200 hover:border-gold-500"
              >
                <span className="text-3xl block mb-3" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-500 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
