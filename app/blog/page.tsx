import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog | Ebbatech Nigeria Limited",
  description: "Engineering guidelines, spatial safety principles, and registry management tips from Ebbatech.",
};

export default function BlogPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Thought Leadership
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Logistics & Space Insights
          </h1>
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Read engineering guidelines, spatial safety principles, and registry management tips from Ebbatech.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#1B4D3E] transition-all"
            >
              <div>
                {/* Thumbnail Image */}
                {post.image && (
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                )}
                
                <div className="p-6 space-y-4">
                  <span className="text-[9px] font-bold text-[#F27052] uppercase tracking-wider block">
                    {post.category} • {post.readTime}
                  </span>
                  
                  <h3 className="font-extrabold text-base md:text-lg text-slate-900 dark:text-white group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-slate-555 dark:text-slate-450 leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-200/50 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-light text-slate-400">By {post.author.name}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline flex items-center gap-1.5"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}