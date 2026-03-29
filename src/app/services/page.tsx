import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: `Our Services | ${COMPANY.name}`,
  description: `Professional construction services in Las Vegas, NV. ${COMPANY.name} offers bathroom remodeling, kitchen remodeling, design-build, commercial renovations, residential remodeling, and water line repairs.`,
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-900 to-dark-800 text-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Construction Services
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            From complete home renovations to commercial buildouts,{" "}
            {COMPANY.shortName} delivers quality craftsmanship across the Las
            Vegas valley. Explore our full range of services below.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-slate-100 rounded-lg p-8 hover:shadow-lg transition-shadow border border-slate-200 hover:border-red-600"
              >
                <span className="text-4xl block mb-4" aria-hidden="true">
                  {service.icon}
                </span>
                <h2 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <span className="text-red-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">
            Why Las Vegas Trusts {COMPANY.shortName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-red-600 text-3xl font-bold mb-2">
                Licensed &amp; Insured
              </div>
              <p className="text-slate-600">
                Fully licensed Nevada general contractor with comprehensive
                insurance for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-3xl font-bold mb-2">
                Local Expertise
              </div>
              <p className="text-slate-600">
                Deep knowledge of Las Vegas building codes, climate
                considerations, and local permitting requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-3xl font-bold mb-2">
                Quality First
              </div>
              <p className="text-slate-600">
                Premium materials and skilled craftsmanship on every project, big
                or small.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
