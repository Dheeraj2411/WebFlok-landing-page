import React from "react";
import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | WebFlok - Web Design & Marketing Insights",
  description: "Read the latest strategies on web design, SEO, and social media marketing to grow your startup.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <main className="flex-1">
      <section className="pt-32 pb-20 px-4 max-w-[1200px] mx-auto min-h-screen">
        <div className="text-center mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-black text-primary mb-6 tracking-tighter">
            Our Insights
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-80 text-balance">
            Actionable strategies on web design, conversion optimization, and marketing to scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-surface-container-low rounded-[32px] border border-outline-variant overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
              <div className="w-full aspect-16/10 relative overflow-hidden bg-surface-container">
                <Image
                  src={post.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&auto=format&fit=crop"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <p className="text-xs font-black text-secondary tracking-widest uppercase mb-3">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <h2 className="text-2xl font-black font-headline text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                  {post.title}
                </h2>
                <p className="text-on-surface-variant text-sm leading-relaxed opacity-90 mb-6 grow">
                  {post.description}
                </p>
                <div className="flex items-center text-primary font-bold text-sm mt-auto">
                  Read Article <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
