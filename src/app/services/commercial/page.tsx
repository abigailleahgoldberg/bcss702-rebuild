import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: `Commercial Renovations Las Vegas | ${COMPANY.name}`,
  description:
    "Professional commercial renovation and tenant improvement services in Las Vegas, NV. Office buildouts, retail spaces, restaurant renovations, and commercial construction by licensed contractors.",
};

const relatedSlugs = ["design-build", "residential", "water-line-repairs"];
const relatedServices = SERVICES.filter((s) => relatedSlugs.includes(s.slug));

export default function CommercialPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-dark-900 to-dark-800 text-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-red-500 font-semibold mb-3 uppercase tracking-wide text-sm">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Commercial Renovations
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Professional commercial spaces that work for your business.{" "}
            {COMPANY.shortName} delivers tenant improvements, buildouts, and
            renovations across the Las Vegas valley.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Commercial Construction You Can Count On
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Las Vegas is a city built on business, and your commercial space
                needs to reflect the quality of your brand. Whether you&apos;re
                opening a new restaurant on the Strip corridor, renovating a
                Henderson office suite, or building out retail space in
                Summerlin, {COMPANY.shortName} brings the expertise and
                reliability your project demands. We understand that downtime
                means lost revenue, so we work efficiently to get your doors
                open on schedule.
              </p>
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                What Our Commercial Services Include
              </h3>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Tenant improvement (TI) buildouts
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Office renovations and space reconfiguration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Restaurant and hospitality construction
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Retail storefront buildouts and remodels
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  ADA compliance upgrades and accessibility modifications
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Commercial bathroom and break room renovations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Flooring, painting, and finish carpentry
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Permitting coordination with Clark County and City of Las
                  Vegas
                </li>
              </ul>

              <h3 className="text-xl font-bold text-dark-900 mb-4">
                Why Choose {COMPANY.shortName}?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We know the Las Vegas commercial landscape. From navigating City
                of Las Vegas and Clark County permitting to coordinating
                after-hours work in occupied buildings, our team minimizes
                disruption to your business. We deliver projects on time, within
                budget, and to the high standards your clients and employees
                expect.
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
