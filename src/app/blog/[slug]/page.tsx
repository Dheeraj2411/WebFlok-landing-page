import React from "react";
import { Metadata } from "next";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | WebFlok Blog`,
    description: post.description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 bg-surface">
      <article className="pt-32 pb-20 px-4 max-w-[800px] mx-auto min-h-screen">
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-secondary hover:text-primary transition-colors mb-8">
          <span className="material-symbols-outlined mr-1 text-sm">arrow_back</span> Back to all articles
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-xs font-black text-on-surface-variant uppercase tracking-widest mb-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
            <span className="w-1 h-1 rounded-full bg-outline"></span>
            <span>{post.author}</span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tighter mb-8 text-balance">
            {post.title}
          </h1>

          <div className="w-full aspect-21/9 relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white mb-16 bg-surface-container">
            <Image
              src={post.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=630&auto=format&fit=crop"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <div className="prose prose-lg prose-blue max-w-none text-on-surface-variant prose-headings:font-headline prose-headings:font-black prose-headings:text-primary prose-a:text-secondary prose-a:font-bold hover:prose-a:text-primary prose-img:rounded-2xl prose-img:shadow-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
      
      {/* Call to action at the bottom of posts */}
      <section className="bg-primary text-white py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-headline font-black mb-6">Ready to scale your business?</h2>
          <p className="text-lg opacity-80 mb-8">Stop worrying about your digital presence and let our experts build you a website that actually converts.</p>
          <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl">
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
