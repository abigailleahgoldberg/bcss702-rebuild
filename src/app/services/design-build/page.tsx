import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: `Design-Build Services Las Vegas | ${COMPANY.name}`,
  description:
    "Streamlined design-build construction services in Las Vegas, NV. One team from concept to completion — blueprints, permits, and construction managed under one roof.",
};

const relatedSlugs = ["kitchen-remodeling", "commercial", "residential"];
const relatedServices = SERVICES.filter((s) => relatedSlugs.includes(s.slug));

export default function DesignBuildPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 text-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold mb-3 uppercase tracking-wide text-sm">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Design-Build</h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            One team, one vision, one contract. {COMPANY.shortName} delivers
            seamless design-build services for Las Vegas residential and
            commercial projects.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Design and Construction Under One Roof
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Traditional construction separates design from building,
                creating communication gaps, budget surprises, and delays. Our
                design-build approach eliminates those problems by keeping your
                entire project under one team from the first sketch to the final
                nail. For Las Vegas property owners, this means faster
                timelines, clearer budgets, and a finished product that matches
                your original vision.
              </p>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                What Our Design-Build Services Include
              </h3>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Initial consultation and site assessment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Conceptual design and space planning
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Architectural drawings and engineering coordination
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Material selection and procurement
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Clark County permitting and plan submission
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Full construction and project management
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Trade coordination — electrical, plumbing, HVAC, and more
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 font-bold">&#10003;</span>
                  Final inspections and project closeout
                </li>
              </ul>

              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Why Choose {COMPANY.shortName}?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our design-build method saves Las Vegas clients time and money.
                By controlling both design and construction, we catch potential
                issues before they become costly change orders. We navigate
                Nevada building codes and Clark County permitting so you
                don&apos;t have to, keeping your project on schedule and within
                budget from day one.
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
