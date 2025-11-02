import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { TopBar } from '../components/TopBar';
import { PetalMenu } from '../components/PetalMenu';
import { useNavigate } from 'react-router-dom';
import { UsersIcon, BuildingIcon, GraduationCapIcon, BookOpenIcon, SettingsIcon, BarChartIcon } from 'lucide-react';
const modules = [{
  icon: UsersIcon,
  label: 'Bhikku & Sirimatha',
  color: 'from-orange-400 to-orange-500',
  path: '/bhikkhu'
}, {
  icon: BuildingIcon,
  label: 'Temple & Devala',
  color: 'from-purple-400 to-purple-500',
  path: '/temples'
}, {
  icon: GraduationCapIcon,
  label: 'Dhamma School',
  color: 'from-blue-400 to-blue-500',
  path: '/dhamma-school'
}, {
  icon: BookOpenIcon,
  label: 'Dhamma Teachers',
  color: 'from-green-400 to-green-500',
  path: '/teachers'
}, {
  icon: SettingsIcon,
  label: 'System Admin',
  color: 'from-red-400 to-red-500',
  path: '/admin'
}, {
  icon: BarChartIcon,
  label: 'Analytics',
  color: 'from-teal-400 to-teal-500',
  path: '/analytics'
}];
export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const navigate = useNavigate();
  const handlePetalAction = (modulePath: string, action: string) => {
    console.log(`Action ${action} on module ${modulePath}`);
    // Handle different actions here
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      <div className={`transition-all duration-300 pt-16 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <main className="p-6">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-2">Good Afternoon</h1>
              <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
              <p className="text-xl opacity-90">DM Ranjith</p>
            </div>
            <div className="absolute right-0 top-0 w-2/3 h-full opacity-20">
              <img src="/temple.jpg" alt="Background" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Employee Information Section */}
         
          {/* Module Grid */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map(module => {
              const Icon = module.icon;
              const isHovered = hoveredModule === module.path;
              return <div key={module.path} className="relative" onMouseEnter={() => setHoveredModule(module.path)} onMouseLeave={() => setHoveredModule(null)}>
                    <button onClick={() => navigate(module.path)} className="w-full group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className="relative z-10">
                        <div className={`w-20 h-20 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors">
                          {module.label}
                        </h4>
                      </div>
                    </button>
                    <PetalMenu isVisible={isHovered} onAction={action => handlePetalAction(module.path, action)} />
                  </div>;
            })}
            </div>
          </div>
          {/* Footer */}
          <div className="bg-blue-900 text-white text-center py-4 rounded-lg">
           
            <p className="text-xs mt-1 opacity-75">
              © 2025 Department of Buddhist Affairs - HRMS
            </p>
          </div>
        </main>
      </div>
    </div>;
}