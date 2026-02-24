import { motion } from 'motion/react';
import { Shield, Target, Users, Globe, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-bold mb-8"
          >
            Our Mission
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
            SECURING THE <span className="text-emerald-500">HUMAN ELEMENT</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            CyberGuard is a global initiative dedicated to closing the cybersecurity skills gap. We believe that awareness is the first and most critical line of defense in the digital age.
          </p>
        </div>

        {/* Vision/Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { icon: Target, title: 'Our Vision', desc: 'To create a world where every individual and organization has the knowledge to navigate the digital landscape safely.' },
            { icon: Users, title: 'Our Community', desc: 'A diverse network of security professionals, educators, and learners collaborating to share threat intelligence.' },
            { icon: Globe, title: 'Global Impact', desc: 'Providing accessible, high-quality cybersecurity education to underserved communities and NGOs worldwide.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/team/800/800"
                alt="Our Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 p-8 rounded-3xl bg-emerald-500 text-black hidden md:block">
              <div className="text-4xl font-bold mb-1">10+ Years</div>
              <div className="text-sm font-bold uppercase tracking-widest">Of Security Excellence</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">A DECADE OF DEFENSE</h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              Founded in 2014 by a group of ethical hackers and security researchers, CyberGuard began as a small community forum for sharing vulnerability reports.
            </p>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              Today, we have grown into a comprehensive awareness platform serving over 500 organizations and thousands of individuals. Our curriculum is developed by practitioners who are on the front lines of cyber defense every day.
            </p>
            <ul className="space-y-4">
              {[
                'Industry-certified curriculum',
                'Real-world incident simulations',
                'Expert-led live seminars',
                'Continuous threat intelligence updates',
              ].map(point => (
                <li key={point} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners/Recognition */}
        <div className="text-center">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-12">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex items-center gap-2">
                <Shield size={32} />
                <span className="text-2xl font-bold">PARTNER {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
