import { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet Kenny and Dahlia Butler — the husband-and-wife team behind ${COMPANY.name}. With decades of construction experience, we're Las Vegas's trusted general contractor for residential and commercial remodeling.`,
};

const VALUES = [
  {
    title: "Quality Craftsmanship",
    description:
      "Every project reflects our commitment to superior materials, precise technique, and attention to detail. We build it right the first time.",
  },
  {
    title: "Honest Communication",
    description:
      "No surprises, no hidden fees. We keep you informed at every stage so you always know what's happening with your project.",
  },
  {
    title: "On-Time Delivery",
    description:
      "We respect your time and your schedule. Our team plans meticulously and executes efficiently to meet every deadline.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your happiness is our measure of success. We don't consider a project complete until you're thrilled with the result.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,168,67,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
              About {COMPANY.shortName}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Built on Hard Work.{" "}
              <span className="text-gold-400">Driven by Integrity.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Family-owned and Las Vegas proud — {COMPANY.shortName} has been
              transforming homes and businesses across the valley with decades of
              hands-on construction experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-slate-700 leading-relaxed text-lg">
            <p>
              {COMPANY.name} was founded by Kenny and Dahlia Butler with a
              simple mission: deliver honest, high-quality construction services
              to the Las Vegas community. What started as a shared passion for
              building has grown into one of the valley&apos;s most trusted
              general contracting companies.
            </p>
            <p>
              With decades of hands-on construction experience, Kenny brings
              deep expertise across residential and commercial projects — from
              intricate bathroom remodels to large-scale commercial buildouts.
              Dahlia ensures every client receives clear communication,
              transparent pricing, and a seamless experience from first call to
              final walkthrough.
            </p>
            <p>
              As Las Vegas natives, Kenny and Dahlia understand the unique
              challenges of building in the desert — from the extreme heat that
              affects material choices to the specific code requirements of Clark
              County. That local knowledge means better results for every project
              we take on.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These aren&apos;t just words on a wall — they&apos;re the
              principles behind every project we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Las Vegas Trusts Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
              Why Las Vegas Trusts Us
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                Licensed &amp; Insured
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fully licensed general contractor and insured for your
                protection. We meet every Clark County and state requirement.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                Locally Owned
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We live and work in Las Vegas. Our reputation in this community
                matters to us — and that drives everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                Decades of Experience
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From small repairs to ground-up builds, our experience means
                fewer surprises and better results on your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
