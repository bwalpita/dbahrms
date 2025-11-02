import React from 'react';
import { LogOutIcon, MenuIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface TopBarProps {
  onMenuClick: () => void;
}
export function TopBar({
  onMenuClick
}: TopBarProps) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };
  return <header className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-between px-6 z-50 shadow-lg">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="p-2 hover:bg-orange-600 rounded-lg transition-colors text-white">
          <MenuIcon className="w-5 h-5" />
        </button>
        <img src="/BD-Logo.png" alt="Logo" className="h-20   p-1" />
      </div>
      <h1 className="text-white text-xl font-semibold absolute left-1/2 -translate-x-1/2">
        DBA HRM System
      </h1>
      <button onClick={handleLogout} className="flex items-center gap-2 bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
        <LogOutIcon className="w-5 h-5" />
        Logout
      </button>
    </header>;
}