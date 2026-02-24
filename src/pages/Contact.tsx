import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8">
                  GET IN <span className="text-emerald-500">TOUCH</span>
                </h1>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                  Have questions about our enterprise training or need help with the platform? Our security experts are here to assist you.
                </p>

                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                      <p className="text-gray-400">support@cyberguard.io</p>
                      <p className="text-gray-400">partners@cyberguard.io</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Visit Us</h3>
                      <p className="text-gray-400">123 Security Plaza, Suite 400</p>
                      <p className="text-gray-400">New York, NY 10001</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-4">
                  <ShieldCheck className="h-10 w-10 text-emerald-500" />
                  <p className="text-sm text-gray-400">
                    Your data is encrypted and handled in accordance with our strict privacy policy.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="h-20 w-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
                    <Send size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
                  <p className="text-gray-400">
                    Thank you for reaching out. One of our experts will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Work Email</label>
                      <input
                        required
                        type="email"
                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                    <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                      <option className="bg-zinc-900">General Inquiry</option>
                      <option className="bg-zinc-900">Enterprise Training</option>
                      <option className="bg-zinc-900">Partnership</option>
                      <option className="bg-zinc-900">Technical Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Message</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 rounded-full bg-emerald-500 text-black font-bold text-lg hover:bg-emerald-400 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
