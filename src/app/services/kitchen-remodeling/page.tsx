import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: `Kitchen Remodeling Las Vegas | ${COMPANY.name}`,
  description:
    "Professional kitchen remodeling in Las Vegas, NV. Custom cabinets, countertops, backsplash, kitchen islands, and full kitchen renovations by licensed general contractors.",
};

const relatedSlugs = ["bathroom-remodeling", "design-build", "residential"];
const relatedServices = SERVICES.filter((s) => relatedSlugs.includes(s.slug));

export default function KitchenRemodelingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-dark-900 to-dark-800 text-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-red-500 font-semibold mb-3 uppercase tracking-wide text-sm">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Kitchen Remodeling
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Create the kitchen you&apos;ve always wanted. {COMPANY.shortName}{" "}
            designs and builds beautiful, functional kitchens for Las Vegas
            families.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-dark-900 mb-6">
                Beautiful Kitchens Built to Last
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The kitchen is the heart of every Las Vegas home — where
                families gather, meals are prepared, and memories are made. Our
                kitchen remodeling services cover everything from cabinet
                refacing to complete layout redesigns. We work with you to
                balance aesthetics, functionality, and budget, ensuring your new
                kitchen enhances both your daily life and your home&apos;s
                value.
              </p>
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                What Our Kitchen Remodeling Includes
              </h3>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Custom cabinetry — shaker, flat-panel, and modern designs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Countertop installation — quartz, granite, marble, and butcher
                  block
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Tile and stone backsplash design and installation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Kitchen island construction and reconfiguration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Sink, faucet, and garbage disposal upgrades
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Under-cabinet and recessed lighting
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Flooring — tile, luxury vinyl plank, and hardwood
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold">&#10003;</span>
                  Electrical and plumbing updates to support new layouts
                </li>
              </ul>

              <h3 className="text-xl font-bold text-dark-900 mb-4">
                Why Choose {COMPANY.shortName}?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Kitchen remodeling is one of the best investments Las Vegas
                homeowners can make. Our team coordinates every trade — from
                plumbing and electrical to cabinetry and countertops — so you
                have a single point of contact throughout the project. We source
                quality materials, manage permitting with Clark County, and
                deliver kitchens that stand up to years of daily use.
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
