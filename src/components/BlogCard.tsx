import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Post } from '../types';
import { formatDate, getReadTime } from '../lib/utils';
import { motion } from 'motion/react';

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-emerald-500/50 hover:bg-white/10"
    >
      <Link to={`/blog/${post.slug}`} className="aspect-video overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-4 text-xs font-medium uppercase tracking-wider text-emerald-500">
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-white/20"></span>
          <span className="text-gray-400">{getReadTime(post.content)}</span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
            {post.title}
          </h3>
        </Link>
        <p className="mb-6 line-clamp-2 text-sm text-gray-400">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar size={14} />
            <span>{formatDate(post.date)}</span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-xs font-semibold text-emerald-500 hover:text-emerald-400"
          >
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
