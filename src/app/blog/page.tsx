import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Construction tips, remodeling advice, and industry insights from Butler's Construction & Service Solutions — Las Vegas's trusted general contractor.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,168,67,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Insights &amp; Tips
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Construction tips, remodeling advice, and industry insights from
            Butler&apos;s Construction &amp; Service Solutions in Las Vegas.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-red-600 hover:shadow-lg transition-all"
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-slate-400 text-sm font-medium">
                    Blog Image
                  </span>
                </div>

                <div className="p-6">
                  <time
                    dateTime={post.date}
                    className="text-sm text-slate-500 mb-2 block"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-xl font-semibold text-dark-900 mb-2 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-red-600 font-semibold text-sm group-hover:text-red-500 transition-colors">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
