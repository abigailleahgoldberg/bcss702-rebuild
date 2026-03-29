import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: COMPANY.name,
    telephone: COMPANY.phone,
    url: COMPANY.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Las Vegas",
    },
    sameAs: [COMPANY.facebook],
    priceRange: "$$",
    description:
      "Licensed and insured general contractor serving Las Vegas, NV. Specializing in residential and commercial remodeling, kitchen and bathroom renovations, design-build, and water line repairs.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,168,67,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-4">
              Licensed &amp; Insured General Contractor
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Las Vegas&apos;s Trusted{" "}
              <span className="text-red-500">General Contractor</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Residential and commercial remodeling backed by decades of
              experience. From kitchen renovations to full commercial buildouts,
              Butler&apos;s Construction delivers quality you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-red-600 text-dark-900 px-8 py-4 rounded font-bold text-lg hover:bg-red-500 transition-colors text-center"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Licensed & Insured", value: "Fully" },
              { label: "Years Experience", value: "Decades" },
              { label: "Las Vegas Based", value: "Local" },
              { label: "Satisfaction", value: "Guaranteed" },
            ].map((badge) => (
              <div key={badge.label}>
                <p className="text-red-600 font-bold text-xl sm:text-2xl">
                  {badge.value}
                </p>
                <p className="text-slate-600 text-sm mt-1">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 mb-4">
              Our Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From residential renovations to commercial buildouts, Butler&apos;s
              Construction offers comprehensive construction services across Las
              Vegas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-slate-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all"
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-lg font-semibold text-dark-900 mb-2 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Projects Section */}
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              See the quality craftsmanship Butler&apos;s Construction brings to
              every Las Vegas project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Kitchen Renovation — Henderson, NV",
              "Master Bathroom Remodel — Summerlin",
              "Commercial Office Buildout — Las Vegas Strip",
              "Whole-Home Remodel — North Las Vegas",
              "Water Line Replacement — Spring Valley",
              "Design-Build Custom Home — Las Vegas",
            ].map((project, i) => (
              <div key={i} className="rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-slate-400 text-sm font-medium px-4 text-center">
                    Project Photo
                  </span>
                </div>
                <div className="bg-white p-4">
                  <p className="font-semibold text-dark-900 text-sm">
                    {project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed mb-4">
                &ldquo;I use Butlers Construction through my property management
                and they are so amazing, Kenny and Dahlia both are very prompt
                and work so diligently. I would recommend Butlers to anyone
                needing services they offer. An Amazing company with workers who
                take pride in their work and making customers happy.&rdquo;
              </blockquote>
              <p className="text-slate-500 text-sm font-medium">
                — Satisfied Client, Las Vegas
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed mb-4">
                &ldquo;Kenny and his team did an outstanding job on our kitchen
                remodel. Professional from start to finish, on time, and the
                quality of work exceeded our expectations. Highly recommend for
                any Las Vegas homeowner.&rdquo;
              </blockquote>
              <p className="text-slate-500 text-sm font-medium">
                — Las Vegas Homeowner
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 leading-relaxed mb-4">
                &ldquo;We hired Butler&apos;s Construction for a commercial
                renovation and couldn&apos;t be happier. They understood our
                vision, stayed within budget, and delivered a space that our
                employees and clients love.&rdquo;
              </blockquote>
              <p className="text-slate-500 text-sm font-medium">
                — Business Owner, Las Vegas
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
