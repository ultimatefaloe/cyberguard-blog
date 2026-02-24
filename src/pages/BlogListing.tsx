import { useState, useMemo } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { posts, categories, tags } from '../data/content';
import BlogCard from '../components/BlogCard';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => post.tags.includes(tag));
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const displayedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const toggleTag = (tagSlug: string) => {
    setSelectedTags(prev =>
      prev.includes(tagSlug) ? prev.filter(t => t !== tagSlug) : [...prev, tagSlug]
    );
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">KNOWLEDGE BASE</h1>
          <p className="text-gray-400 text-lg">Expert insights, threat reports, and security best practices.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-10">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Filter size={16} className="text-emerald-500" />
                Categories
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={cn(
                    "w-full text-left px-4 py-2 rounded-lg text-sm transition-colors",
                    !selectedCategory ? "bg-emerald-500 text-black font-bold" : "text-gray-400 hover:bg-white/5"
                  )}
                >
                  All Categories
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={cn(
                      "w-full text-left px-4 py-2 rounded-lg text-sm transition-colors",
                      selectedCategory === cat.name ? "bg-emerald-500 text-black font-bold" : "text-gray-400 hover:bg-white/5"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-white font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag.id}
                    onClick={() => toggleTag(tag.slug)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
                      selectedTags.includes(tag.slug)
                        ? "bg-emerald-500 border-emerald-500 text-black"
                        : "border-white/10 text-gray-400 hover:border-emerald-500/50"
                    )}
                  >
                    #{tag.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {displayedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {displayedPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-16 flex justify-center items-center gap-4">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(p => p - 1)}
                      className="p-2 rounded-lg border border-white/10 text-gray-400 hover:border-emerald-500/50 disabled:opacity-50"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="text-gray-400 text-sm">
                      Page <span className="text-white font-bold">{currentPage}</span> of {totalPages}
                    </span>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(p => p + 1)}
                      className="p-2 rounded-lg border border-white/10 text-gray-400 hover:border-emerald-500/50 disabled:opacity-50"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20 bg-white/5 rounded-2xl border border-dashed border-white/10">
                <p className="text-gray-500">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                    setSelectedTags([]);
                  }}
                  className="mt-4 text-emerald-500 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
