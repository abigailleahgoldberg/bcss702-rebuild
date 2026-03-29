import { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get a free quote from ${COMPANY.name}. Call ${COMPANY.phone} or fill out our contact form. Licensed Las Vegas general contractor for residential and commercial remodeling.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,168,67,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Let&apos;s Talk About{" "}
              <span className="text-red-500">Your Project</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Ready to get started? Reach out for a free, no-obligation quote.
              We respond within 1 business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-dark-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">
                      Phone
                    </p>
                    <a
                      href={COMPANY.phoneHref}
                      className="text-dark-900 font-semibold hover:text-red-600 transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-dark-900 font-semibold hover:text-red-600 transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-red-500"
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
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">
                      Location
                    </p>
                    <p className="text-dark-900 font-semibold">
                      {COMPANY.location}
                    </p>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">
                      Facebook
                    </p>
                    <a
                      href={COMPANY.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-900 font-semibold hover:text-red-600 transition-colors"
                    >
                      Follow us on Facebook
                    </a>
                  </div>
                </div>

                {/* Response time notice */}
                <div className="bg-slate-100 rounded-lg p-5 mt-8">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-red-600 shrink-0 mt-0.5"
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
                    <div>
                      <p className="font-semibold text-dark-900 text-sm">
                        We respond within 1 business day
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        For urgent requests, call us directly at{" "}
                        <a
                          href={COMPANY.phoneHref}
                          className="text-red-600 font-medium hover:underline"
                        >
                          {COMPANY.phone}
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
