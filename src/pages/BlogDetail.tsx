import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, Clock, ChevronLeft, Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { posts } from '../data/content';
import { formatDate, getReadTime } from '../lib/utils';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';
import BlogCard from '../components/BlogCard';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" />;
  }

  const relatedPosts = posts
    .filter(p => p.id !== post.id && p.tags.some(t => post.tags.includes(t)))
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-500 transition-colors">
            <ChevronLeft size={16} />
            Back to Knowledge Base
          </Link>
        </nav>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-emerald-500 mb-6">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-white/20"></span>
              <span>{getReadTime(post.content)}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 border-y border-white/10 py-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">
                  {post.author[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{post.author}</div>
                  <div className="text-xs text-gray-500">Lead Security Researcher</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar size={16} className="text-emerald-500" />
                {formatDate(post.date)}
              </div>
              <div className="ml-auto flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-white/10 text-gray-400 transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="p-2 rounded-full hover:bg-white/10 text-gray-400 transition-colors">
                  <Linkedin size={18} />
                </button>
                <button className="p-2 rounded-full hover:bg-white/10 text-gray-400 transition-colors">
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-16 rounded-3xl overflow-hidden aspect-[21/9]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-emerald max-w-none mb-20">
            <div className="markdown-body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-white/10 pt-12 mb-20">
            <h3 className="text-white font-bold mb-4">Topic Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="border-t border-white/10 pt-20">
              <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">RELATED INSIGHTS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map(p => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </div>
  );
}
