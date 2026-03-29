import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: `Bathroom Remodeling Las Vegas | ${COMPANY.name}`,
  description:
    "Expert bathroom remodeling in Las Vegas, NV. Custom showers, tile work, vanities, tub-to-shower conversions, and complete bathroom renovations by licensed contractors.",
};

const relatedSlugs = ["kitchen-remodeling", "residential", "design-build"];
const relatedServices = SERVICES.filter((s) => relatedSlugs.includes(s.slug));

export default function BathroomRemodelingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-dark-900 to-dark-800 text-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-red-500 font-semibold mb-3 uppercase tracking-wide text-sm">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Bathroom Remodeling
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Transform your bathroom into a modern retreat. From simple updates
            to full gut renovations, {COMPANY.shortName} delivers stunning
            results for Las Vegas homeowners.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Complete Bathroom Transformations
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Your bathroom should be more than functional — it should be a
                space you enjoy. Whether you&apos;re updating a guest bath or
                creating a luxurious master suite, our team handles every detail
                from demolition to final walkthrough. Las Vegas homes deserve
                bathrooms that combine style with durability, especially given
                the desert climate&apos;s demands on plumbing and moisture
                management.
              </p>
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                What Our Bathroom Remodeling Includes
              </h3>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Custom tile showers, floors, and accent walls
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Tub-to-shower conversions and walk-in showers
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Vanity installation — single, double, and floating designs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Countertop upgrades — granite, quartz, and solid surface
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Lighting, fixtures, and hardware replacement
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Plumbing rough-in and finish work
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Waterproofing and moisture barrier systems
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  ADA-compliant and accessible bathroom designs
                </li>
              </ul>

              <h3 className="text-xl font-bold text-dark-900 mb-4">
                Why Choose {COMPANY.shortName}?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                As a licensed Las Vegas general contractor, we understand the
                unique challenges of bathroom construction in the Nevada desert.
                From hard water considerations that affect fixture selection to
                proper ventilation in our arid climate, we build bathrooms that
                last. Every project includes transparent pricing, a dedicated
                project manager, and our commitment to on-time completion.
              </p>
            </div>

            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-lg">
                <span className="text-slate-400 text-sm">Project Photo</span>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-lg">
                <span className="text-slate-400 text-sm">Project Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-slate-200 hover:border-red-600"
              >
                <span className="text-3xl block mb-3" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="text-lg font-bold text-dark-900 group-hover:text-red-600 transition-colors mb-2">
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
