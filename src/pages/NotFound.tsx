import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center h-24 w-24 rounded-3xl bg-red-500/10 text-red-500 mb-8">
          <ShieldAlert size={48} />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl font-bold text-white mb-6">ACCESS DENIED</h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          The resource you are looking for has been moved, deleted, or never existed in our secure database.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors"
        >
          <ArrowLeft size={20} /> Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
