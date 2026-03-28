import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: `Water Line Repairs Las Vegas | ${COMPANY.name}`,
  description:
    "Fast, reliable water line repair and replacement in Las Vegas, NV. Emergency water line service, leak detection, pipe replacement, and water damage prevention by licensed contractors.",
};

const relatedSlugs = ["bathroom-remodeling", "residential", "commercial"];
const relatedServices = SERVICES.filter((s) => relatedSlugs.includes(s.slug));

export default function WaterLineRepairsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold mb-3 uppercase tracking-wide text-sm">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Water Line Repairs
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Fast, reliable water line repair and replacement to protect your Las
            Vegas property. {COMPANY.shortName} responds quickly to prevent
            costly water damage.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Protect Your Property from Water Damage
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Las Vegas&apos;s desert climate creates unique stress on water
                lines. The extreme temperature swings between scorching summers
                and cool winters cause pipes to expand and contract, leading to
                cracks and leaks over time. The region&apos;s hard water
                accelerates mineral buildup inside pipes, reducing flow and
                increasing pressure on aging connections. When a water line
                fails, every minute counts. {COMPANY.shortName} provides prompt,
                professional water line repair and replacement to minimize damage
                and get your water flowing again.
              </p>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                What Our Water Line Services Include
              </h3>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Water line leak detection and diagnosis
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Main water line repair and replacement
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Interior supply line repairs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Copper, PEX, and CPVC pipe installation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Slab leak detection and repair
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Water pressure regulation and valve replacement
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Landscape and hardscape restoration after repairs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Emergency water shut-off and damage mitigation
                </li>
              </ul>

              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Why Choose {COMPANY.shortName}?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Water line emergencies don&apos;t wait, and neither do we. As a
                licensed Nevada general contractor, we have the equipment and
                expertise to locate leaks quickly, make lasting repairs, and
                restore any damage to your property — from drywall and flooring
                to landscaping. We work with Las Vegas Valley Water District
                requirements and handle all necessary coordination so you can
                focus on getting back to normal.
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
