import { useParams, Navigate, Link } from 'react-router-dom';
import { seminars } from '../data/content';
import { Calendar, Clock, User, Video, MapPin, Share2, ChevronLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import { formatDate } from '../lib/utils';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function SeminarDetail() {
  const { slug } = useParams();
  const seminar = seminars.find(s => s.slug === slug);

  if (!seminar) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <nav className="mb-8">
          <Link to="/seminars" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-500 transition-colors">
            <ChevronLeft size={16} />
            Back to Seminars
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                  seminar.status === 'live' ? 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10' : 'text-blue-400 border-blue-400/20 bg-blue-400/10'
                )}>
                  {seminar.status}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1.5">
                  <Video size={14} />
                  {seminar.platform}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                {seminar.title}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                {seminar.description}
              </p>
            </div>

            {/* Video Embed or Placeholder */}
            <div className="aspect-video rounded-3xl overflow-hidden bg-black border border-white/10 mb-12">
              {seminar.videoUrl ? (
                <iframe
                  src={seminar.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-12">
                  <Video className="h-20 w-20 text-emerald-500/20 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">Stream Preview</h3>
                  <p className="text-gray-500 max-w-md">
                    The live stream will begin on {formatDate(seminar.date)} at {seminar.time}.
                  </p>
                </div>
              )}
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">About this Seminar</h2>
              <p className="text-gray-400 mb-6">
                In this session, we will explore the critical intersection of technology and human behavior. As cyber threats become increasingly sophisticated, understanding the psychological tactics used by adversaries is just as important as implementing technical controls.
              </p>
              <ul className="space-y-4 text-gray-400 mb-8">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0 mt-1" />
                  <span>Deep dive into current attack vectors and real-world case studies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0 mt-1" />
                  <span>Practical strategies for strengthening organizational resilience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0 mt-1" />
                  <span>Live Q&A session with industry experts and practitioners.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Event Details Card */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-8">Event Details</h3>
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Date</div>
                      <div className="text-white font-medium">{formatDate(seminar.date)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Time</div>
                      <div className="text-white font-medium">{seminar.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Platform</div>
                      <div className="text-white font-medium">{seminar.platform}</div>
                    </div>
                  </div>
                </div>

                <a
                  href={seminar.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors mb-4"
                >
                  {seminar.status === 'upcoming' ? 'Register for Free' : 'Join Session'} <ExternalLink size={18} />
                </a>
                <button className="w-full py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                  <Share2 size={18} /> Share Event
                </button>
              </div>

              {/* Speaker Card */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Featured Speaker</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-2xl font-bold text-emerald-500">
                    {seminar.speaker[0]}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{seminar.speaker}</div>
                    <div className="text-sm text-gray-500">{seminar.speakerRole}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  A recognized authority in cybersecurity with over 15 years of experience in threat intelligence and strategic defense.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
