import { useState } from 'react';
import { seminars } from '../data/content';
import SeminarCard from '../components/SeminarCard';
import { Video, Calendar, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SeminarListing() {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'live' | 'ended'>('all');

  const filteredSeminars = seminars.filter(s => {
    if (activeTab === 'all') return true;
    return s.status === activeTab;
  });

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">LIVE SEMINARS</h1>
          <p className="text-gray-400 text-lg">
            Interactive sessions with global cybersecurity leaders. Learn, engage, and stay ahead of the curve.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4 p-1.5 bg-white/5 rounded-2xl border border-white/10">
            {(['all', 'upcoming', 'live', 'ended'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all",
                  activeTab === tab
                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Seminar List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {filteredSeminars.length > 0 ? (
            filteredSeminars.map(seminar => (
              <SeminarCard key={seminar.id} seminar={seminar} />
            ))
          ) : (
            <div className="text-center py-32 bg-white/5 rounded-3xl border border-dashed border-white/10">
              <Video className="h-16 w-16 text-gray-700 mx-auto mb-6" />
              <p className="text-gray-500 text-lg">No seminars found in this category.</p>
              <button
                onClick={() => setActiveTab('all')}
                className="mt-4 text-emerald-500 hover:underline font-bold"
              >
                View all seminars
              </button>
            </div>
          )}
        </div>

        {/* Calendar CTA */}
        <div className="max-w-4xl mx-auto mt-24 p-12 rounded-3xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-white/10 text-center">
          <Calendar className="h-12 w-12 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">NEVER MISS A SESSION</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Sync our global seminar calendar with your Google, Outlook, or Apple calendar to stay updated on upcoming events.
          </p>
          <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
}
