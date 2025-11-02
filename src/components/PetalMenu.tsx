import React from 'react';
import { EyeIcon, EditIcon, PlusIcon, FileTextIcon, SearchIcon } from 'lucide-react';
interface PetalMenuProps {
  isVisible: boolean;
  onAction: (action: string) => void;
}
export function PetalMenu({
  isVisible,
  onAction
}: PetalMenuProps) {
  const menuItems = [{
    icon: EyeIcon,
    label: 'View',
    action: 'view',
    angle: 0
  }, {
    icon: EditIcon,
    label: 'Update',
    action: 'update',
    angle: 72
  }, {
    icon: PlusIcon,
    label: 'Add',
    action: 'add',
    angle: 144
  }, {
    icon: FileTextIcon,
    label: 'Reports',
    action: 'reports',
    angle: 216
  }, {
    icon: SearchIcon,
    label: 'Search',
    action: 'search',
    angle: 288
  }];
  if (!isVisible) return null;
  return <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {menuItems.map((item, index) => {
      const Icon = item.icon;
      const radius = 80;
      const angleRad = item.angle * Math.PI / 180;
      const x = Math.cos(angleRad) * radius;
      const y = Math.sin(angleRad) * radius;
      return <button key={item.action} onClick={e => {
        e.stopPropagation();
        onAction(item.action);
      }} className="absolute pointer-events-auto bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-petal-open" style={{
        transform: `translate(${x}px, ${y}px)`,
        animationDelay: `${index * 50}ms`
      }}>
            <div className="flex flex-col items-center gap-1">
              <Icon className="w-5 h-5 text-orange-600" />
              <span className="text-xs font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          </button>;
    })}
    </div>;
}