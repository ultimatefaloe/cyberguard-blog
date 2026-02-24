import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold tracking-tight text-white">
                CYBER<span className="text-emerald-500">GUARD</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-md mb-8">
              Empowering organizations and individuals with the knowledge and tools to defend against modern cyber threats. Our mission is to build a safer digital world through education and awareness.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Platform</h3>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-gray-400 hover:text-emerald-500 transition-colors">Blog</Link></li>
              <li><Link to="/seminars" className="text-gray-400 hover:text-emerald-500 transition-colors">Seminars</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CyberGuard Awareness Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Status: All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
