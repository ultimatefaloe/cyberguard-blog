import { motion } from 'motion/react';
import { Shield, Lock, Eye, Zap, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts, seminars } from '../data/content';
import BlogCard from '../components/BlogCard';
import SeminarCard from '../components/SeminarCard';

export default function Home() {
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const upcomingSeminars = seminars.filter(s => s.status !== 'ended').slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-black"></div>
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Shield size={14} />
              Enterprise Cybersecurity Awareness
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8"
            >
              DEFEND YOUR <br />
              <span className="text-emerald-500">DIGITAL FRONTIER</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
            >
              Empower your workforce with industry-leading cybersecurity education. From threat intelligence to hands-on seminars, we provide the tools to stay ahead of modern adversaries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                to="/blog"
                className="px-8 py-4 rounded-full bg-emerald-500 text-black font-bold text-lg hover:bg-emerald-400 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Explore Knowledge Base <ArrowRight size={20} />
              </Link>
              <Link
                to="/seminars"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Join Live Seminars <Play size={20} className="text-emerald-500 fill-emerald-500" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-12 hidden xl:flex flex-col gap-4">
          {[
            { label: 'Active Threats Tracked', value: '1.2M+' },
            { label: 'Organizations Secured', value: '500+' },
            { label: 'Awareness Seminars', value: '150+' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl w-64"
            >
              <div className="text-2xl font-bold text-emerald-500">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lock, title: 'Zero Trust Strategy', desc: 'Implementing modern security architectures that assume no implicit trust.' },
              { icon: Eye, title: 'Threat Monitoring', desc: 'Real-time analysis of emerging attack vectors and vulnerability research.' },
              { icon: Zap, title: 'Rapid Response', desc: 'Strategic frameworks for incident containment and disaster recovery.' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors"
              >
                <feature.icon className="h-12 w-12 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">LATEST INSIGHTS</h2>
              <p className="text-gray-400">Deep dives into the world of cybersecurity.</p>
            </div>
            <Link to="/blog" className="text-emerald-500 font-bold hover:underline flex items-center gap-1">
              View All Posts <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Seminars */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">UPCOMING SEMINARS</h2>
              <p className="text-gray-400">Join live sessions with industry leaders.</p>
            </div>
            <div className="space-y-6">
              {upcomingSeminars.map(seminar => (
                <SeminarCard key={seminar.id} seminar={seminar} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">STAY INFORMED</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Get the latest threat intelligence and security best practices delivered to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="px-10 py-4 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
