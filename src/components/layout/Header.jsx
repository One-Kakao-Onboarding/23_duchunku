import React, { useState } from 'react';
import { Bell, User } from 'lucide-react';
import NotificationModal from '../NotificationModal';
import { notificationsData } from '@/data/notifications';

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const newNotificationsCount = notificationsData.filter(n => n.isNew).length;

  return (
    <>
      <header className="px-6 py-6 bg-[#F9F9F9] flex justify-between items-center sticky top-0 z-10 border-b border-gray-100">
        <div>
          <h1 className="text-2xl font-black text-[#3C1E1E] flex items-center tracking-tighter">
            기억나나? <span className="ml-1 text-[#FEE500] text-3xl">.</span>
          </h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Personal Greeting Assistant
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="relative p-2 bg-white rounded-xl shadow-sm border border-gray-50 hover:bg-gray-50 transition-colors"
          >
            <Bell size={18} className="text-gray-600" />
            {newNotificationsCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            )}
          </button>
          <button className="p-2 bg-white rounded-xl shadow-sm border border-gray-50 text-gray-600 hover:bg-gray-50 transition-colors">
            <User size={18} />
          </button>
        </div>
      </header>

      <NotificationModal
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        notifications={notificationsData}
      />
    </>
  );
};

export default Header;
