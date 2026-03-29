import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/blog";
import ContactCTA from "@/components/ContactCTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      {/* Article */}
      <article className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="text-red-600 hover:text-red-500 transition-colors text-sm font-semibold mb-8 inline-block"
          >
            &larr; Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
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
            <h1 className="text-3xl sm:text-4xl font-bold text-dark-900 leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-slate-700 leading-relaxed text-base sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-red-600 hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-slate-400 text-sm font-medium">
                    Blog Image
                  </span>
                </div>
                <div className="p-5">
                  <time
                    dateTime={related.date}
                    className="text-xs text-slate-500 mb-1 block"
                  >
                    {new Date(related.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="text-base font-semibold text-dark-900 group-hover:text-red-600 transition-colors">
                    {related.title}
                  </h3>
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
