import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, UsersIcon } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboardIcon, label: 'Dashboard', path: '/dashboard' },
    { icon: UsersIcon, label: 'Bhikkhu', path: '/bhikkhu' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gray-50 border-r border-gray-200 z-40 flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-200 bg-white">
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <img
              src="/image.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-orange-500"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">DM Ranjith</h3>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
