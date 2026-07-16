"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";

interface BlogContentProps {
  slug: string;
}

export default function BlogPostContent({ slug }: BlogContentProps) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Article Not Found</h2>
        <Link href="/blog" className="text-sm font-bold text-[#F27052] hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    let shareUrl = "";
    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    } else if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    }
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <article className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
        </Link>

        {/* Article Meta Header */}
        <div className="space-y-4">
          <span className="inline-block bg-[#1B4D3E]/10 text-[#1B4D3E] dark:text-[#ff8a6f] text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-955 dark:text-white">
            {post.title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center font-bold text-[10px] uppercase">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <span className="block font-bold text-slate-800 dark:text-slate-200 leading-none">{post.author.name}</span>
                <span className="text-[10px] text-slate-400">{post.author.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#F27052]" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F27052]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {post.image && (
          <div 
            className="w-full h-80 sm:h-[400px] rounded-3xl bg-cover bg-center border border-slate-150 dark:border-slate-850 shadow-sm"
            style={{ backgroundImage: `url('${post.image}')` }}
          />
        )}

        {/* Content Body */}
        <div 
          className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed font-light space-y-6 pt-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Social Share Box */}
        <div className="flex items-center justify-between border-t border-b border-slate-100 dark:border-slate-800 py-6 my-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Share2 className="w-4 h-4 text-[#F27052]" /> Share this Article
          </span>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleShare("facebook")}
              className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-850 flex items-center justify-center text-slate-400 hover:text-[#1B4D3E] hover:border-[#1B4D3E] transition-all cursor-pointer"
              aria-label="Share on Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </button>
            <button 
              onClick={() => handleShare("twitter")}
              className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-855 flex items-center justify-center text-slate-400 hover:text-[#1B4D3E] hover:border-[#1B4D3E] transition-all cursor-pointer"
              aria-label="Share on Twitter"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button 
              onClick={() => handleShare("linkedin")}
              className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-855 flex items-center justify-center text-slate-400 hover:text-[#1B4D3E] hover:border-[#1B4D3E] transition-all cursor-pointer"
              aria-label="Share on LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white border-l-4 border-[#F27052] pl-3">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-6 shadow-sm block hover:border-[#1B4D3E] transition-colors"
                >
                  <span className="text-[9px] font-bold text-[#F27052] uppercase block mb-1">{rp.category}</span>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors line-clamp-2">
                    {rp.title}
                  </h4>
                  <p className="text-[11px] text-slate-550 dark:text-slate-400 font-light mt-2 line-clamp-2">
                    {rp.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}