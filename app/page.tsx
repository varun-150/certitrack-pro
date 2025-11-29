'use client';

import Link from 'next/link';
import { useState } from 'react';

const pages = [
  { name: 'Login', path: '/login', desc: 'Secure authentication' },
  { name: 'Dashboard', path: '/dashboard', desc: 'Real-time overview & alerts' },
  { name: 'Certifications', path: '/certifications', desc: 'Manage all certifications' },
  { name: 'Reports', path: '/reports', desc: 'Generate compliance reports' },
  { name: 'Team', path: '/team', desc: 'Manage team & permissions' },
  { name: 'Settings', path: '/settings', desc: 'Account & notifications' },
  { name: 'Help', path: '/help', desc: 'FAQ & documentation' },
  { name: 'Profile', path: '/profile', desc: 'User profile & preferences' },
];

export default function Home() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">CertiTrack Pro</h1>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-4 py-2 bg-white/20 rounded hover:bg-white/30"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="text-center py-12 px-4 bg-gradient-to-b from-blue-500/10 to-transparent">
        <h2 className="text-4xl font-bold mb-4">Professional Certification Tracking Platform</h2>
        <p className="text-lg opacity-80 mb-6">Transform compliance management into a strategic advantage</p>
      </div>

      {/* Pages Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-8">Platform Pages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="p-6 rounded-lg border-2 border-blue-500 hover:border-purple-500 hover:shadow-lg transition-all"
            >
              <h4 className="font-bold text-xl mb-2">{page.name}</h4>
              <p className="opacity-70 text-sm">{page.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-8">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-500/10 rounded-lg">
            <h4 className="font-bold mb-2">🔒 Secure Authentication</h4>
            <p className="opacity-70">JWT-based authentication with password hashing</p>
          </div>
          <div className="p-6 bg-purple-500/10 rounded-lg">
            <h4 className="font-bold mb-2">📊 Real-time Dashboards</h4>
            <p className="opacity-70">Live certification status and expiration alerts</p>
          </div>
          <div className="p-6 bg-blue-500/10 rounded-lg">
            <h4 className="font-bold mb-2">👥 Team Management</h4>
            <p className="opacity-70">Role-based access control (RBAC)</p>
          </div>
          <div className="p-6 bg-purple-500/10 rounded-lg">
            <h4 className="font-bold mb-2">📈 Analytics</h4>
            <p className="opacity-70">Comprehensive reporting & compliance tracking</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 mt-12 border-t border-slate-700">
        <p className="opacity-70">© 2025 CertiTrack Pro | Professional Certification Management</p>
      </footer>
    </div>
  );
}
