import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon, LockIcon } from 'lucide-react';
export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple auth simulation
    if (username && password) {
      navigate('/dashboard');
    }
  };
  return <div className="w-full min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-500 to-orange-600 p-12 items-center justify-center relative overflow-hidden">
        {/* Decorative lotus patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 left-0 w-96 h-96" viewBox="0 0 200 200">
            <path d="M100,20 Q120,40 140,60 Q160,80 180,100 Q160,120 140,140 Q120,160 100,180 Q80,160 60,140 Q40,120 20,100 Q40,80 60,60 Q80,40 100,20" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-0 right-0 w-96 h-96" viewBox="0 0 200 200">
            <path d="M100,20 Q120,40 140,60 Q160,80 180,100 Q160,120 140,140 Q120,160 100,180 Q80,160 60,140 Q40,120 20,100 Q40,80 60,60 Q80,40 100,20" fill="currentColor" />
          </svg>
        </div>
        <div className="relative z-10 text-white max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <img src="/log.jpg" alt="Department Logo" className="w-16 h-16 bg-white rounded-lg p-2" />
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-orange-500 rounded-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-6">
            Department of Buddhist Affairs - HRMS
          </h1>
          <p className="text-lg text-white/90">
            Supporting the guardians of our living Buddhist heritage.
            Efficiently managing the resources and personnel who preserve the
            Dhamma and serve our nation's spiritual foundation.
          </p>
        </div>
      </div>
      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">SIGN IN</h2>
            <p className="text-gray-500 mb-8">
              Enter your user name and password to login
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="User name" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors">
                SIGN IN
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{' '}
              <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold">
                SIGN UP
              </a>
            </p>
          </div>
          <p className="text-center text-xs text-gray-500 mt-8">
            © 2025. Department of Buddhist Affairs - HRMS All Rights Reserved.
          </p>
        </div>
      </div>
    </div>;
}