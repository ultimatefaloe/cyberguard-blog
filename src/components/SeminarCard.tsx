import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Video, ExternalLink } from 'lucide-react';
import { Seminar } from '../types';
import { formatDate } from '../lib/utils';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SeminarCardProps {
  seminar: Seminar;
}

export default function SeminarCard({ seminar }: SeminarCardProps) {
  const statusColors = {
    upcoming: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    live: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    ended: 'text-gray-400 bg-gray-400/10 border-gray-400/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-emerald-500/50"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-64 shrink-0 aspect-video md:aspect-square rounded-xl overflow-hidden">
          <img
            src={seminar.coverImage}
            alt={seminar.title}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className={cn(
            "absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
            statusColors[seminar.status]
          )}>
            {seminar.status}
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
              <Video size={14} className="text-emerald-500" />
              {seminar.platform}
            </span>
          </div>

          <Link to={`/seminars/${seminar.slug}`}>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              {seminar.title}
            </h3>
          </Link>

          <p className="text-gray-400 text-sm mb-6 line-clamp-2">
            {seminar.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar size={14} className="text-emerald-500" />
              {formatDate(seminar.date)}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock size={14} className="text-emerald-500" />
              {seminar.time}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 col-span-2">
              <User size={14} className="text-emerald-500" />
              <span>{seminar.speaker} • <span className="text-gray-600">{seminar.speakerRole}</span></span>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-4">
            <Link
              to={`/seminars/${seminar.slug}`}
              className="px-6 py-2.5 rounded-full bg-emerald-500 text-black text-sm font-bold hover:bg-emerald-400 transition-colors"
            >
              {seminar.status === 'upcoming' ? 'Register Now' : 'View Details'}
            </Link>
            {seminar.status === 'live' && (
              <a
                href={seminar.meetingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors"
              >
                Join Stream <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
